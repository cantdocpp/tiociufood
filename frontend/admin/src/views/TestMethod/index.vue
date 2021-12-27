<template>
    <div class="test-method">
        <TestMethod 
            v-if="isModalOpen"
            @close="closeModal"
        />
        <Container>
            <Spacer :y="50" />
            <Box v-if="isLoading">
                loading...
            </Box>
            <Box v-if="!isLoading">
                <Flex justify="flex-end">
                    <Button @click="openModal">Test Perhitungan Metode</Button>
                </Flex>
                <Box>
                    <Header :level="3">
                        Data Latih
                    </Header>
                    <table class="table">
                        <thead>
                            <tr>
                                <th class="th"></th>
                                <th class="th" v-for="(data, index) in trainingData" :key="index"> 
                                    {{ data.name }}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(content, index) in foodList" :key="index">
                                <td class="td">
                                    {{ content }} 
                                </td>
                                <td class="td" v-for="(rate, rateIndex) in getTrainingFoodReviews(content)" :key="rateIndex">
                                    {{ rate }}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Box>
                <Spacer :y="20" />
                <Box>
                    <Header :level="3">
                        Hasil Perhitungan Metode
                    </Header>
                    <table class="table">
                        <thead>
                            <tr>
                                <th class="th">Makanan</th>
                                <th class="th">Pengguna</th>
                                <th class="th">Nilai Prediksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(content, index) in getMethodResults" :key="index">
                                <td class="td">
                                    {{ content.foodName }} 
                                </td>
                                <td class="td">
                                    {{ content.user }} 
                                </td>
                                <td class="td">
                                    {{ content.prediction }} 
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Box>
            </Box>
        </Container>
    </div>
</template>

<script>
import TestMethod from './components/testMethod.vue'

import Container from '@/components/Container'
import Spacer from '@/components/Spacer'
import Box from '@/components/Box'
import Header from '@/components/Header'
import Flex from '@/components/Flex'
import Button from '@/components/Button'

import { get_test_recommendation } from '@/api/recommendation'

export default {
    data() {
        return {
            isLoading: true,
            recommendationData: [],
            trainingData: [],
            foodList: ['fu yung hai', 'ngohiong', 'sapo tahu', 'bistik babi', 'ifumie', 'babi kecap'],
            isModalOpen: false
        }
    },
    computed: {
        getMethodResults() {
            const foodList = this.foodList
            const result = []
            foodList.forEach(food => {
                this.recommendationData.forEach(data => {
                    data.recommendation.forEach(rec => {
                        if (rec.foodName === food) {
                            result.push({
                                foodName: rec.foodName,
                                user: data.name,
                                prediction: rec.foodRate
                            })
                        }
                    })
                })
            })
            
            return result
        }
    },
    methods: {
        getTrainingFoodReviews(foodName) {
            const rate = []
            this.trainingData.forEach(data => {
                data.reviews.forEach(review => {
                    if (review.foodName === foodName) {
                        rate.push(review.foodRate)
                    }
                })
            })
            return rate
        },
        openModal() {
            this.isModalOpen = true
        },
        closeModal() {
            this.isModalOpen = false
        }
    },
    async created() {
        const res = await get_test_recommendation()
        console.log(res)
        this.recommendationData = res.recommendationData
        this.trainingData = res.trainingData
        this.isLoading = false
    },
    components: {
        TestMethod,
        Container,
        Spacer,
        Box,
        Header,
        Flex,
        Button
    }
}
</script>

<style scoped>
    .table {
        white-space: nowrap;
    }

    .th {
        box-sizing: border-box;
        text-transform: capitalize;
        padding: 0 10px;
        font-size: 25px;
    }

    .td {
        box-sizing: border-box;
        text-align: center;
        padding: 5px 0;
        word-wrap: break-word;
        padding: 10px;
        text-align: center;
        font-size: 25px;
    }
</style>
