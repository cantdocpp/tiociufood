<template>
    <h1 class="title" :style="{ fontSize: `${size}px` }" :class="{ 'title--capitalize': capitalize }">
        <slot></slot>
    </h1>
</template>

<script>
export default {
    props: {
        size: {
            type: Number,
            default: 14
        },
        capitalize: {
            type: Boolean,
            default: true
        }
    }
}
</script>

<style scoped>
    .title {
        font-weight: bold;
    }
    
    .title--capitalize {
        text-transform: capitalize;
    }
</style>
