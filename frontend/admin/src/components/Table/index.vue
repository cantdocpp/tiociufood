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
                <td class="td" v-for="(key, keyIndex) in contentKeys" :key="keyIndex"> 
                    {{ content[key] }} 
                </td>
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
    },
    computed: {
        contentKeys() {
            if (this.data.length === 0) {
                return []
            }
            return Object.keys(this.data[0])
        }
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

    .td, .th {
        font-size: 25px;
        text-align: center;
        padding: 5px 0;
        word-wrap: break-word;
    }
</style>
