<template>
    <p
        class="text"
        :style="{ fontSize: `${size}px` }"
    >
        <slot></slot>
    </p>
</template>

<script>
export default {
    size: {
        type: Number,
        default: 16
    }
}
</script>

<style scoped>
    .text {
        text-transform: capitalize;
    }
</style>
