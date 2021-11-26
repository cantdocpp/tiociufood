<template>
    <h1 class="title" :style="{ fontSize: `${size}px` }">
        <slot></slot>
    </h1>
</template>

<script>
export default {
    props: {
        size: {
            type: Number,
            default: 14
        }
    }
}
</script>

<style scoped>
    .title {
        font-weight: bold;
    }
</style>
