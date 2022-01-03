<template>
    <div class="recommendation">
        <Container>
            <Spacer :margin-top="20" />
            <Box v-if="!loading">
                <Box v-if="recommendation.length > 0">
                    <Title :size="30">
                        Recommended for you
                    </Title>
                    <Spacer :margin-top="30" />
                    <ul>
                        <li v-for="(rec, index) in getRecommendations" :key="index">
                            <router-link :to="{ name: 'FoodDetail', params: { foodName: getFoodNameUrl(rec) } }" class="recommendation__link">
                                {{ rec }}
                            </router-link>
                        </li>
                    </ul>
                </Box>
                <Box v-if="recommendation.length === 0">
                    <Title :size="20">
                        You have no recommendation, please rate food and restaurant
                    </Title>
                </Box>
            </Box>
            <Box v-if="loading">
                loading....
            </Box>
        </Container>
    </div>
</template>

<script>
import Title from '@/components/Title'

import Container from '@/layouts/Container'
import Spacer from '@/layouts/Spacer'
import Box from '@/layouts/Box'

import { get_recommendation } from '@/api/recommendation'

export default {
    data() {
        return {
            loading: true,
            recommendation: []
        }
    },
    computed: {
        getRecommendations() {
            const rec = []
            for (let i = 0; i < 5; i++) {
                rec.push(this.recommendation[i].foodName)
            }
            return rec
        }
    },
    methods: {
        getFoodNameUrl(foodName) {
            return foodName.split(' ').join('-')
        }
    },
    async created() {
        const userState = this.$store.getters.userStateData
        const { username, email } = userState
        const res = await get_recommendation({
            email: email,
            username: username
        })
        this.recommendation = res.recommendationData
        console.log(res)
        this.loading = false
    },
    components: {
        Title,
        Box,
        Container,
        Spacer
    }
}
</script>

<style scoped>
    .recommendation__link {
        font-size: 25px;
    }
</style>
