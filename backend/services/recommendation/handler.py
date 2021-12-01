# try:
#   import unzip_requirements
# except ImportError:
#     print('import error')
#   pass

import json
import boto3
import pandas as pd
from sklearn.neighbors import NearestNeighbors
from boto3.dynamodb.types import TypeDeserializer

def recommendation(event, context):
    event_body = json.loads(event['body'])
    user_email = event_body['email']
    username = event_body['username']

    deserializer = TypeDeserializer()
    client = boto3.client('dynamodb')

    training_data_response = client.scan(
        TableName='trainingTable',
    )

    user_data_response = client.query(
        TableName='mainTable',
        KeyConditionExpression='(#i = :e) AND (begins_with(#sk, :sk))',
        ExpressionAttributeNames = {
            '#i': 'identifier',
            '#sk': 'sk'
        },
        ExpressionAttributeValues = {
            ':e': {
                'S': f"USER#{user_email}"
            },
            ':sk': {
                'S': 'REVIEW'
            }
        }
    )

    training_data = training_data_response['Items']
    user_data = user_data_response['Items']

    custom_df_data = {}
    index_lists = ['fu yung hai', 'ngohiong', 'sapo tahu', 'bistik babi', 'ifumie', 'lo mie', 'babi kecap', 'caysim cah', 'pak lay cah', 'mun tahu', 'kwetiaw sapi', 'khailan cah', 'babi kuluyuk', 'sapi cah', 'tahu kuah sayur asin', 'hie pien saos', 'cap cay cah', 'bubur babi', 'kodok cah', 'udang yam ha']

    training_user_rate = [0 for i in range(20)]
    for data in training_data:
        deserialized_data = {k: deserializer.deserialize(v) for k, v in data.items()}
        print(deserialized_data)
        user_name = deserialized_data['name']
        for index, lists in enumerate(index_lists):
            for review in deserialized_data['reviews']:
                if review['foodName'] == lists:
                    training_user_rate[index] = int(review['foodRate'])
        custom_df_data[user_name] = training_user_rate
        training_user_rate = [0 for i in range(20)]
    
    user_rate = [0 for i in range(20)]
    for data in user_data:
        deserialized_user_data = {k: deserializer.deserialize(v) for k, v in data.items()}
        user_name = user_email
        for index, lists in enumerate(index_lists):
            if deserialized_user_data['foodName'] == lists:
                user_rate[index] = int(deserialized_user_data['foodRate'])
        custom_df_data[username] = user_rate
    user_rate = [0 for i in range(20)]

    df = pd.DataFrame(custom_df_data, index = index_lists)
    df1 = df.copy()

    # print(df)

    def recommend_foods(user, num_recommended_foods):

        print('The list of the Foods {} Has Eaten \n'.format(user))

        for m in df[df[user] > 0][user].index.tolist():
            print(m)
        
        print('\n')

        recommended_foods = []

        for m in df[df[user] == 0].index.tolist():
            index_df = df.index.tolist().index(m)
            predicted_rating = df1.iloc[index_df, df1.columns.tolist().index(user)]
            recommended_foods.append((m, predicted_rating))

        sorted_rm = sorted(recommended_foods, key=lambda x:x[1], reverse=True)
        
        print('The list of the Recommended Movies \n')
        rank = 1
        foods = []
        for recommended_food in sorted_rm[:num_recommended_foods]:
            print('{}: {} - predicted rating:{}'.format(rank, recommended_food[0], recommended_food[1]))
            if float(recommended_food[1]):
                foods.append(recommended_food[0])
            rank = rank + 1
        return foods

    def food_recommender(user, num_neighbors, num_recommendation):
  
        number_neighbors = num_neighbors

        knn = NearestNeighbors(metric='cosine', algorithm='brute')
        knn.fit(df.values)
        distances, indices = knn.kneighbors(df.values, n_neighbors=number_neighbors)

        user_index = df.columns.tolist().index(user)

        for m,t in list(enumerate(df.index)):
            if df.iloc[m, user_index] == 0:
                sim_foods = indices[m].tolist()
                food_distances = distances[m].tolist()
            
                if m in sim_foods:
                    id_food = sim_foods.index(m)
                    sim_foods.remove(m)
                    food_distances.pop(id_food) 

                else:
                    sim_foods = sim_foods[:num_neighbors-1]
                    food_distances = food_distances[:num_neighbors-1]
                
                food_similarity = [1-x for x in food_distances]
                food_similarity_copy = food_similarity.copy()
                nominator = 0

                for s in range(0, len(food_similarity)):
                    if df.iloc[sim_foods[s], user_index] == 0:
                        if len(food_similarity_copy) == (number_neighbors - 1):
                            food_similarity_copy.pop(s)
                        
                        else:
                            food_similarity_copy.pop(s-(len(food_similarity)-len(food_similarity_copy)))
                        
                    else:
                        nominator = nominator + food_similarity[s]*df.iloc[sim_foods[s],user_index]
                
                if len(food_similarity_copy) > 0:
                    if sum(food_similarity_copy) > 0:
                        predicted_r = nominator/sum(food_similarity_copy)
                    
                    else:
                        predicted_r = 0

                else:
                    predicted_r = 0
                    
                df1.iloc[m,user_index] = predicted_r
                # print(predicted_r)
        return recommend_foods(user, num_recommendation)
    
    food_recommendation = food_recommender('patrick', 10, 10)

    body = {
        "message": "success getting food recommendation",
        "data": food_recommendation
    }

    response = {
        "statusCode": 200,
        "body": json.dumps(body)
    }

    return response
