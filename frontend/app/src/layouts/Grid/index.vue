<template>
    <div 
        class="grid" 
        :style="{ 
            gridTemplateColumns: templateColumns, 
            columnGap: `${columnGap}px`,
            rowGap: `${rowGap}px`
        }"
        >
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        templateColumns: {
            type: String,
            required: true
        },
        columnGap: {
            type: Number,
            default: 0
        },
        rowGap: {
            type: Number,
            default: 0
        }
    }
}
</script>


<style scoped>
    .grid {
        display: grid;
        column-gap: 10px;
    }
</style>