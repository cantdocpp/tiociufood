<template>
    <router-link :to="{
        name: name,
        params: {
            ...params
        }
    }" class="link">
        <slot></slot>
    </router-link>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        },
        params: {
            type: Object,
            default: function() {
                return {}
            }
        }
    }
}
</script>


<style scoped>
    .link {
        color: #000;
        text-decoration: none;
        outline: none;
        cursor: pointer;
        display: inherit;
    }
</style>
