<template>
    <div class="spacer" :style="{ marginLeft: `${x}px`, marginTop: `${y}px` }"></div>
</template>

<script>
export default {
    props: {
        x: {
            type: Number,
            default: 0
        },
        y: {
            type: Number,
            default: 0
        }
    },
}
</script>

<style scoped>
    .spacer {
        display: inline-block;
    }
</style>
