<template>
    <label class="label">
        <p class="label__name"> {{ name }} </p>
        <slot></slot>
    </label>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: false
        }
    }
}
</script>

<style scoped>
    .label {
        width: 100%;
    }
    
    .label__name {
        width: 100%;
        text-transform: capitalize;
    }
</style>