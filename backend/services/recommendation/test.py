try:
    import unzip_requirements
except ImportError:
    pass

import json

def handler(event, context):
    print(json.load(event))
    print(event)
    body = {
        "message": "success getting food recommendation",
        "data": food_recommendation
    }

    print(body)

    response = {
        "statusCode": 200,
        "body": json.dumps(event)
    }

    return response