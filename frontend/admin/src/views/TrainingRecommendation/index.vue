<template>
    <div class="food-similarity">
        <Container>
            <Spacer :y="50" />
            <Box v-if="isLoading">
                loading...
            </Box>
            <Box v-if="!isLoading">
                <h1>
                    Recommendation for {{ getName }}
                </h1>
                <Spacer :y="50" />
                <table class="table">
                    <thead>
                        <tr>
                            <th class="th">No.</th>
                            <th class="th"> 
                                Food Name
                            </th>
                            <th class="th"> 
                                Value
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(content, index) in tableData" :key="index">
                            <td class="td"> {{ index + 1 }} </td>
                            <td class="td"> 
                                {{ content.foodName }}
                            </td>
                            <td class="td"> 
                                {{ content.foodRate }}
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

import { get_training_recommendation } from '@/api/training'

export default {
    data() {
        return {
            isLoading: true,
            tableData: [],
            foodName: null
        }
    },
    computed: {
        getName() {
            const params = this.$route.params.name
            return params.split('-').join(' ')
        }
    },
    async created() {
        const route = this.$route
        const nameParams = route.params.name
        const name = nameParams.split('-').join(' ')
        
        try {
            const res = await get_training_recommendation({
                name: name
            })
            this.tableData = res.recommendationData
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
