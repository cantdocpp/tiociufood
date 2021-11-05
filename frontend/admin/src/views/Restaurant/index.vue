<template>
    <Container>
        <Spacer :y="50" />
        <Loading v-if="isLoading" />
        <Box v-if="!isLoading">
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

import { get_restaurant } from '@/api/restaurant'

export default {
    data() {
        return {
            isLoading: true,
            tableList: ['Restaurant name', 'Restaurant address', 'Restaurant description'],
            tableData: []
        }
    },
    async created() {
        const tableData = await get_restaurant()
        console.log(tableData)
        this.tableData = tableData
        this.isLoading = false
    },
    components: {
        Container,
        Box,
        Spacer,
        Table,
        Loading
    }
}
</script>

