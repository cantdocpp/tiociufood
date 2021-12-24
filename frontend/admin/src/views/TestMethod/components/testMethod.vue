<template>
    <Modal 
        header-text="Test Metode"
        v-bind="$attrs"
    >
        <Form @submit.prevent="submit">
            <Stack>
                <Label v-for="(review, index) in reviews" :key="index" :name="review.foodName">
                    <Input :placeholder="0" :value="review.foodRate" type="number" v-model="review.foodRate" />
                </Label>
                <Spacer :y="20" />
                <Box>
                    <Flex justify="flex-end">
                        <Button max-width>
                            Submit
                        </Button>
                    </Flex>
                </Box>
                <Box v-if="Object.keys(result).length > 0">
                    <Header>
                        Hasil test rekomendasi
                    </Header>
                    <ul>
                        <li v-for="(recommendation, index) in result.recommendation" :key="index">
                            {{ recommendation.foodName }} => {{ recommendation.foodRate }}
                        </li>
                    </ul>
                </Box>
            </Stack>
        </Form>
    </Modal>
</template>

<script>
import Spacer from '@/components/Spacer'
import Flex from '@/components/Flex'
import Box from '@/components/Box'
import Modal from '@/components/Modal'
import Form from '@/components/Form'
import Label from '@/components/Label'
import Input from '@/components/Input'
import Stack from '@/components/Stack'
import Button from '@/components/Button'
import Header from '@/components/Header'

import { get_recommendation_post } from '@/api/recommendation'

export default {
    data() {
        return {
            reviews: [
                {
                    foodName: 'fu yung hai',
                    foodRate: 0
                },
                {
                    foodName: 'ngohiong',
                    foodRate: 0
                },
                {
                    foodName: 'sapo tahu',
                    foodRate: 0
                },
                {
                    foodName: 'bistik babi',
                    foodRate: 0
                },
                {
                    foodName: 'ifumie',
                    foodRate: 0
                },
                {
                    foodName: 'babi kecap',
                    foodRate: 0
                },
            ],
            result: {}
        }
    },
    watch: {
        reviews: {
            handler(newVal, oldVal) {
                newVal.forEach(val => {
                    val.foodRate = Number(val.foodRate)
                })
                return newVal
            },
            deep: true
        }
    },
    methods: {
        setRecommendationData(res) {
            let result = {}
            const recommendationData = res.recommendationData
            recommendationData.forEach(data => {
                if (data.name === 'admin') {
                    result = data
                }
            })
            this.result = result
        },
        async submit() {
            const data = {
                input: {
                    name: 'admin',
                    reviews: this.reviews
                }
            }

            const res = await get_recommendation_post(data)
            this.setRecommendationData(res)
        }
    },
    components: {
        Spacer,
        Modal,
        Form,
        Label,
        Input,
        Stack,
        Box,
        Flex,
        Button,
        Box,
        Header
    }
}
</script>

<style scoped>
    .grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }
</style>
