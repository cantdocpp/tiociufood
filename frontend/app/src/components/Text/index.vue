<template>
    <span 
        :style="{ fontSize: `${size}px`, fontWeight: weight }" 
        :class="[ getCenterClass ]"
    >
        <slot></slot>
    </span>
</template>

<script>
export default {
    props: {
        size: {
            type: Number,
            default: 14
        },
        weight: {
            type: String,
            default: 'normal'
        },
        centered: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        getCenterClass() {
            return this.centered ? 'text--center' : ''
        }
    }
}
</script>

<style scoped>
    .text--center {
        display: block;
        text-align: center;
    }
</style>
