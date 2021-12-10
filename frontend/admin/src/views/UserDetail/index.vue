<template>
    <Container>
        <Spacer :y="50" />
        <Loading v-if="isLoading" />
        <Box v-if="!isLoading">
            <Spacer :y="70" />
            <table class="table">
                <thead>
                    <tr>
                        <th class="th">No.</th>
                        <th class="th"> 
                            Food Name
                        </th>
                        <th class="th"> 
                            Food Rate
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(recommendation, index) in recommendations" :key="index">
                        <td class="td"> {{ index + 1 }} </td>
                        <td class="td"> 
                            {{ recommendation.foodName }}
                        </td>
                        <td class="td">
                            {{ recommendation.foodRate }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </Box>
    </Container>
</template>

<script>
// import components
import Container from '@/components/Container'
import Box from '@/components/Box'
import Spacer from '@/components/Spacer'
import Table from '@/components/Table'
import Loading from '@/components/Loading'
import Flex from '@/components/Flex'
import Button from '@/components/Button'

import { get_user_detail } from '@/api/user'
import { get_recommendation } from '@/api/recommendation'

export default {
    data() {
        return {
            isLoading: true,
            recommendations: []
        }
    },
    async created() {
        const params = this.$route.params.userName
        const userDetail = await get_user_detail({
            email: params
        })
        const email = params
        const username = userDetail.userData.Items[0].username
        const recommendation = await get_recommendation({
            email: email,
            username: username
        })
        this.recommendations = recommendation.recommendationData
        this.isLoading = false
    },
    components: {
        Container,
        Box,
        Spacer,
        Table,
        Loading,
        Flex,
        Button
    }
}
</script>

<style scoped>
    .table {
        width: 100%;
        table-layout: fixed;
    }

    .th {
        text-transform: capitalize;
    }

    .td {
        text-align: center;
        padding: 5px 0;
        word-wrap: break-word;
    }
</style>
