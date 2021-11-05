<template>
    <router-link :to="destinationLink">
        <slot />
    </router-link>
</template>

<script>
export default {
    props: {
        to: {
            type: String,
            default: 'food'
        }
    },
    computed: {
        destinationLink() {
            return `/${this.to}`
        }
    }
}
</script>
