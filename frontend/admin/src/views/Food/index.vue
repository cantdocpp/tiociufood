<template>
    <Container>
        <Add 
            v-if="isAdd"
            @close="closeAddModal"
            @add="addTableData"
        />
        <Spacer :y="50" />
        <Loading v-if="isLoading" />
        <Box v-if="!isLoading">
            <Flex justify="flex-end">
                <Button @click="openModal">Add Food</Button>
            </Flex>
            <Spacer :y="70" />
            <table class="table">
                <thead>
                    <tr>
                        <th class="th">No.</th>
                        <th class="th"> 
                            Food Name
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(content, index) in tableData" :key="index">
                        <td class="td"> {{ index + 1 }} </td>
                        <td class="td"> 
                            <router-link :to="{ name: 'FoodSimilarity', params: { foodName: getParams(content.foodName) } }">
                                {{ content.foodName }}
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
import Add from './components/add'

import { get_food } from '@/api/food'

export default {
    data() {
        return {
            isLoading: true,
            tableData: [],
            isAdd: false
        }
    },
    methods: {
        openModal() {
            this.isAdd = true
        },
        closeAddModal() {
            this.isAdd = false
        },
        addTableData(data) {
            this.tableData.push(data)
            this.isAdd = false
        },
        getParams(foodName) {
            return foodName.split(' ').join('-')
        }
    },
    async created() {
        const tableData = await get_food()
        console.log(tableData)
        this.tableData = tableData
        this.isLoading = false
    },
    components: {
        Container,
        Box,
        Spacer,
        Table,
        Loading,
        Flex,
        Button,
        Add
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
