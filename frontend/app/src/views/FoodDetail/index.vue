<template>
    <div class="food-detail">
        <Spacer :margin-top="30" />
        <Container>
            <Box v-if="isLoading">
                loading...
            </Box>
            <Box v-if="!isLoading">
                <Box>
                    <Flex>
                        <Box>
                            <div class="food-detail__image" :style="{ backgroundImage: 'url(' + food.foodImage + ')' }"></div>
                        </Box>
                        <Spacer :margin-left="20" />
                        <Box>
                            <Title :size="30">
                                {{ food.foodName }}
                            </Title>
                            <Spacer :margin-top="5" />
                            <Box>
                                <Flex>
                                    <div class="food-detail__rating">
                                        {{ getFoodTotalRate }}
                                        <i class="restaurant-card__icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="0.9rem" height="0.9rem" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 fauQLv"><title>star-fill</title><path d="M6.76 6.8l-6.38 0.96c-0.22 0.040-0.38 0.22-0.38 0.44 0 0.12 0.040 0.24 0.12 0.32v0l4.64 4.76-1.1 6.66c0 0.020 0 0.040 0 0.080 0 0.24 0.2 0.44 0.44 0.44 0.1 0 0.16-0.020 0.24-0.060v0l5.7-3.12 5.68 3.12c0.060 0.040 0.14 0.060 0.22 0.060 0.24 0 0.44-0.2 0.44-0.44 0-0.040 0-0.060 0-0.080v0l-1.1-6.66 4.64-4.76c0.080-0.080 0.12-0.2 0.12-0.32 0-0.22-0.16-0.4-0.36-0.44h-0.020l-6.38-0.96-2.96-6.18c-0.060-0.12-0.18-0.2-0.32-0.2s-0.26 0.080-0.32 0.2v0z"></path></svg>
                                        </i>
                                    </div>
                                    <Spacer :margin-left="10" />
                                    <Box>
                                        ({{ foodReview.length }} Reviews)
                                    </Box>
                                </Flex>
                            </Box>
                        </Box>
                    </Flex>
                    <Spacer :margin-top="20" />
                    <Box>
                        <Title :size="20">
                            Restaurant list
                        </Title>
                        <ul>
                            <li v-for="(restaurant, index) in getFoodRestaurant" :key="index">
                                <router-link class="food-detail__restaurant" :to="{ name: 'DiscoverRestaurantDetail', params: { restaurantName: getRestaurantNameJoin(restaurant.restaurantName) } }">
                                    {{ restaurant.restaurantName }}
                                </router-link>
                            </li>
                        </ul>
                    </Box>
                    <Spacer :margin-top="20" />
                    <Box>
                        <Title :size="20">
                            Similiar Food
                        </Title>
                        <Spacer :margin-top="20" />
                        <Box>
                            <Flex justify="space-between">
                                <a :href="`/food/${getFoodNameJoin(similarity.foodName)}`" class="food-detail__box" v-for="(similarity, similarityIndex) in getFoodSimilarity" :key="similarityIndex">
                                    <div>
                                        <img :src="similarity.foodImage" alt="food image" class="food-detail__box__image">
                                        <Text :size="17">
                                            {{ similarity.foodName }}
                                        </Text>
                                    </div>
                                </a>
                            </Flex>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Container>
    </div>
</template>

<script>
import { get_food_detail } from '@/api/food'
import { get_food_similarity } from '@/api/training'

import Title from '@/components/Title'
import Text from '@/components/Text'

import Container from '@/layouts/Container'
import Box from '@/layouts/Box'
import Flex from '@/layouts/Flex'
import Spacer from '@/layouts/Spacer'

export default {
    data() {
        return {
            isLoading: true,
            restaurant: [],
            food: {},
            foodReview: [],
            foodSimilarity: [],
            foodList: []
        }
    },
    computed: {
        getFoodTotalRate() {
            let rate = 0
            this.foodReview.forEach(review => {
                rate += review.foodRate
            })

            const result = Math.floor(rate / this.foodReview.length)
            return Number(result.toFixed(1)) || 0.0
        },
        getFoodRestaurant() {
            const restaurantWithFood = []
            const params = this.$route.params.foodName.split('-').join(' ')
            this.restaurant.forEach(res => {
                const restaurantFoodArr = res.restaurantFood.split(',')
                restaurantFoodArr.forEach(food => {
                    if (food === params) {
                        restaurantWithFood.push(res)
                    }
                })
            })
            return restaurantWithFood
        },
        getFoodSimilarity() {
            const params = this.$route.params.foodName.split('-').join(' ')
            const similaritySlice = this.foodSimilarity.slice(1, 5)
            const foodArr = []
            for (let i = 0; i < similaritySlice.length; i++) {
                for (let j = 0; j < this.foodList.length; j++) {
                    if (similaritySlice[i].includes(this.foodList[j].foodName)) {
                        if (this.foodList[j].foodName !== params) {
                            foodArr.push(this.foodList[j])
                        }
                    }
                }
            }

            return foodArr
        }
    },
    methods: {
        getRestaurantNameJoin(name) {
            return name.split(' ').join('-')
        },
        getFoodNameJoin(name) {
            return name.split(' ').join('-')
        }
    },
    async created() {
        const params = this.$route.params.foodName
        const res = await get_food_detail(params)
        const sim = await get_food_similarity({
            foodName: params.split('-').join(' ')
        })
        this.foodList = res.foodData.Items
        this.restaurant = res.restaurantData.Items
        this.food = res.foodDetailData.Items[0]
        this.foodReview = res.foodReview.Items
        this.foodSimilarity = sim.similarityData
        console.log(sim)
        this.isLoading = false
    },
    components: {
        Container,
        Box,
        Flex,
        Spacer,
        Title,
        Text
    }
}
</script>


<style scoped>
    .food-detail {
        width: 60%;
        margin: 0 auto;
    }

    .food-detail__content {
        margin-top: 50px;
        width: 40%;
        margin: 0 auto;
    }

    .food-detail__image {
        width: 150px;
        height: 150px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }

    .food-detail__rating {
        color: #fff;
        box-sizing: border-box;
        padding-left: 3px;
        padding-right: 3px;
        padding-bottom: 2px;
        background: #CB202D;
        border-radius: 5px;
        vertical-align: text-top;
    }

    .food-detail__restaurant {
        font-size: 20px;
        text-decoration: underline;
    }

    .food-detail__box {
        color: #000;
        text-decoration: none;
        width: 24%;
    }

    .food-detail__box__image {
        width: 100%;
        height: 100px;
        object-fit: cover;
        border-radius: 5px;
    }
</style>