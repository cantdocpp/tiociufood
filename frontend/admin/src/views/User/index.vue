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
                            User Email
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(content, index) in userData" :key="index">
                        <td class="td"> {{ index + 1 }} </td>
                        <td class="td"> 
                            <router-link :to="{ name: 'UserDetail', params: { userName: content.email } }">
                                {{ content.email }}
                            </router-link> 
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

import { get_all_user } from '@/api/user'

export default {
    data() {
        return {
            isLoading: true,
            userData: []
        }
    },
    async created() {
        const res = await get_all_user()
        this.userData = res.userData
        console.log(this.userData)
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
