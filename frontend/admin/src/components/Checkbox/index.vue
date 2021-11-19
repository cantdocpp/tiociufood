<template>
    <div>
        <input type="checkbox" :value="inputValue" @input="onChange"> {{ name }}
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        },
        inputValue: {
            type: String,
            required: true
        },
    },
    methods: {
        onChange(event) {
            this.$emit('change', event.target.value)
        }
    }
}
</script>
