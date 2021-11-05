<template>
    <table class="table">
        <thead>
            <tr>
                <th class="th">No.</th>
                <th class="th" v-for="(name, index) in headers" :key="index"> 
                    {{ name }} 
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(content, index) in data" :key="index">
                <td class="td"> {{ index + 1 }} </td>
                <td class="td"> {{ content.restaurantName }} </td>
                <td class="td"> {{ content.restaurantAddress }} </td>
                <td class="td"> {{ content.restaurantDescription }} </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    props: {
        headers: {
            type: Array,
            required: true
        },
        data: {
            type: Array,
            required: true
        }
    }
}
</script>


<style scoped>
    .table {
        width: 100%;
    }

    .th {
        text-transform: capitalize;
    }

    .td {
        text-align: center;
        padding: 5px 0;
    }
</style>
