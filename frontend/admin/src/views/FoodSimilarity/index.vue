<template>
    <div class="food-similarity">
        <Container>
            <Spacer :y="50" />
            <Box v-if="isLoading">
                loading...
            </Box>
            <Box v-if="!isLoading">
                <h1>
                    Similarity of {{ foodName }} with other foods
                </h1>
                <Spacer :y="50" />
                <table class="table">
                    <thead>
                        <tr>
                            <th class="th">No.</th>
                            <th class="th"> 
                                Food Name 1
                            </th>
                            <th class="th"> 
                                Food Name 2
                            </th>
                            <th class="th"> 
                                Similarity
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(content, index) in tableData" :key="index">
                            <td class="td"> {{ index + 1 }} </td>
                            <td class="td"> 
                                {{ foodName }}
                            </td>
                            <td class="td"> 
                                {{ content[0] === foodName ? content[1] : content[0] }}
                            </td>
                            <td class="td"> 
                                {{ content[2] }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </Box>
        </Container>
    </div>
</template>

<script>
import Container from '@/components/Container'
import Box from '@/components/Box'
import Spacer from '@/components/Spacer'

import { get_food_similarity } from '@/api/training'

export default {
    data() {
        return {
            isLoading: true,
            tableData: [],
            foodName: null
        }
    },
    async created() {
        const route = this.$route
        const foodNameParams = route.params.foodName
        const foodName = foodNameParams.split('-').join(' ')
        this.foodName = foodName
        
        try {
            const res = await get_food_similarity({
                foodName: foodName
            })
            this.tableData = res.similarityData
            this.isLoading = false
        } catch(err) {
            console.log(err)
        }
    },
    components: {
        Container,
        Box,
        Spacer
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
