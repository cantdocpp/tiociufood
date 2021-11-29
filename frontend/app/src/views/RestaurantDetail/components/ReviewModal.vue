<template>
    <div class="review-modal">
        <Modal title="Add Review" v-bind="$attrs">
            <Text>
                step: {{ step }}
            </Text>
            <Spacer :margin-top="20" />
            <Box v-if="step === 1">
                <Stack space="medium">
                    <Box>
                        <Title :size="20">
                            Rate this restaurant
                        </Title>
                        <Spacer :margin-top="10" />
                        <ReviewStar @review="restaurantReview" />
                    </Box>
                    <Box>
                        <Title :size="20">
                            Say something about this restaurant
                        </Title>
                        <Spacer :margin-top="10" />
                        <Textfield v-model="form.restaurant.review"></Textfield>
                    </Box>
                    <Flex justify="flex-end">
                        <Button @click="next">
                            Next
                        </Button>
                    </Flex>
                </Stack>
            </Box>
            <Box v-if="step === 2">
                <Stack space="medium">
                    <Title :size="20">
                        What food did you buy ?
                    </Title>
                    <Grid template-columns="repeat(4, 1fr)" :row-gap="5" :column-gap="5">
                        <div class="checkbox__wrapper" v-for="(food, index) in foods" :key="index">
                            <input type="checkbox" :value="food.foodName" :name="food.foodName" v-model="eatenFood">
                            <label :for="food.foodName"> {{ food.foodName }} </label>
                        </div>
                    </Grid>
                    <Flex justify="flex-end">
                        <Button type="secondary" @click="back">
                            Back
                        </Button>
                        <Spacer :margin-left="10" />
                        <Button @click="next">
                            Next
                        </Button>
                    </Flex>
                </Stack>
            </Box>
            <Box v-if="step === 3">
                <Stack space="medium">
                    <Box v-for="(food, index) in form.foods" :key="index">
                        <Stack>
                            <Title :size="20">
                                Review makanan {{ food.foodName }}
                            </Title>
                            <ReviewStar @review="rateFood(index, $event)" />
                            <Textfield v-model="form.foods[index].review"></Textfield>
                        </Stack>
                    </Box>
                    <Flex justify="flex-end">
                        <Button type="secondary" @click="back">
                            Back
                        </Button>
                        <Spacer :margin-left="10" />
                        <Button @click="submit">
                            Submit
                        </Button>
                    </Flex>
                </Stack>
            </Box>
        </Modal>
    </div>
</template>

<script>
import ReviewStar from './ReviewStar.vue'

import Modal from '@/components/Modal'
import Title from '@/components/Title'
import Text from '@/components/Text'
import Textfield from '@/components/Textfield'
import Button from '@/components/Button'

import Box from '@/layouts/Box'
import Spacer from '@/layouts/Spacer'
import Stack from '@/layouts/Stack'
import Flex from '@/layouts/Flex'
import Grid from '@/layouts/Grid'

import { add_review_restaurant, add_review_food } from '@/api/review'

export default {
    props: {
        foods: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            step: 1,
            form: {
                restaurant: {
                    rate: 0,
                    review: ''
                },
                foods: []
            },
            eatenFood: []
        }
    },
    methods: {
        restaurantReview(value) {
           this.form.restaurant.rate = value
        },
        next() {
            this.step++
        },
        back() {
            this.step--
        },
        rateFood(index, rate) {
            this.form.foods[index].rate = rate
        },
        async submitRestaurant() {
            const restaurantName = this.$route.params.restaurantName.split('-').join(' ')
            const userState = this.$store.getters.userStateData
            const userEmail = userState.email
            
            const restaurantData = {
                restaurantName: restaurantName,
                userEmail: userEmail,
                ...this.form.restaurant
            }

            await add_review_restaurant(restaurantData)
        },
        async submitFood() {
            const restaurantName = this.$route.params.restaurantName.split('-').join(' ')
            const userState = this.$store.getters.userStateData
            const userEmail = userState.email

            const foodData = {
                restaurantName: restaurantName,
                userEmail: userEmail,
                reviews: this.form.foods
            }

            await add_review_food(foodData)
        },
        async submit() {
            await this.submitRestaurant()
            await this.submitFood()

            this.$emit('close')
        }
    },
    watch: {
        eatenFood(newFood) {
            const foodReview = []
            newFood.forEach(food => {
                foodReview.push({
                    foodName: food,
                    review: '',
                    rate: 0
                })
            })
            this.form.foods = foodReview
        }
    },
    components: {
        ReviewStar,
        Modal,
        Title,
        Text,
        Textfield,
        Button,
        Box,
        Spacer,
        Stack,
        Flex,
        Grid
    }
}
</script>
