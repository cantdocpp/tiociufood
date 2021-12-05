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
            <Table 
                :headers="tableList"
                :data="tableData"
            />
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
            tableList: ['food name'],
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
        }
    },
    async created() {
        const tableData = await get_food()
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
