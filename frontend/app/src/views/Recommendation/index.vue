<template>
    <div class="recommendation">
        <Container>
            <Spacer :margin-top="20" />
            <Box v-if="!loading">
                <Box v-if="recommendation">
                    <Title :size="25">
                        Recommended for you
                    </Title>
                    <Spacer :margin-top="30" />
                    <ul>
                        <li v-for="(rec, index) in getRecommendations" :key="index">
                            {{ rec }}
                        </li>
                    </ul>
                </Box>
                <Box v-if="!recommendation">
                    You have no recommendation, please rate food and restaurant
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
            this.recommendation.forEach(food => {
                if (food.foodRate > 0) {
                    rec.push(food.foodName)
                }
            })
            return rec
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

