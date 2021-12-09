<template>
    <div class="training-data">
        <Container>
            <Spacer :y="50" />
            <Box v-if="isLoading">
                loading...
            </Box>
            <Box v-if="!isLoading">
                <table class="table">
                    <thead>
                        <tr>
                            <th class="th"></th>
                            <th class="th" v-for="(food, index) in foodList" :key="index"> 
                                {{ food }}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(content, index) in tableData" :key="index">
                            <td class="td"> {{ content.name }} </td>
                            <td class="td" v-for="(review, contentIndex) in content.reviews" :key="contentIndex">
                                {{ review.foodRate }}
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

import { get_training_data } from '@/api/training'

export default {
    data() {
        return {
            isLoading: true,
            tableData: [],
            foodList: ['fu yung hai', 'ngohiong', 'sapo tahu', 'bistik babi', 'ifumie', 'lo mie', 'babi kecap', 'caysim cah', 'pak lay cah', 'mun tahu', 'kwetiaw sapi', 'khailan cah', 'babi kuluyuk', 'sapi cah', 'tahu kuah sayur asin', 'hie pien saos', 'cap cay cah', 'bubur babi', 'kodok cah', 'udang yam ha']
        }
    },
    async created() {
        try {
            const res = await get_training_data()
            this.tableData = res.result.Items
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
        white-space: nowrap;
    }

    .th {
        box-sizing: border-box;
        text-transform: capitalize;
        padding: 0 10px;
    }

    .td {
        box-sizing: border-box;
        text-align: center;
        padding: 5px 0;
        word-wrap: break-word;
        padding: 10px;
        text-align: center;
    }
</style>
