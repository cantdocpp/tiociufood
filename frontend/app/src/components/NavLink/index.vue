<template>
    <router-link :to="to" class="navlink">
        <slot></slot>
    </router-link>
</template>

<script>
export default {
    props: {
        to: {
            type: String,
            required: true
        },
    }
}
</script>

<style scoped>
    .navlink {
        color: #000;
        text-decoration: none;
        outline: none;
    }
</style>
