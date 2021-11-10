<template>
    <div class="flex" :style="{ justifyContent: justify, alignItems: align }">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        justify: {
            type: String,
            default: 'flex-start'
        },
        align: {
            type: String,
            default: 'center'
        }
    }
}
</script>

<style scoped>
    .flex {
        display: flex;
    }
</style>
