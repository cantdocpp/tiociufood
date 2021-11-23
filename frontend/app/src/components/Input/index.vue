<template>
    <input 
        :type="type"
        :value="value"
        class="input"
        :placeholder="placeholder"
        :class="{ 'input--error': error }"
        @input="$emit('update:modelValue', $event.target.value)"
    >
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'text'
        },
        placeholder: {
            type: String,
            required: true
        },
        error: {
            type: Boolean,
            default: false
        },
        value: {
            type: String,
            default: ''
        }
    }
}
</script>

<style scoped>
    .input {
        box-sizing: border-box;
        width: 100%;
        padding: 7px 10px;
        outline: none;
        border-radius: 5px;
        border: 1px solid #000;
    }

    .input--error {
        border: 1px solid red;
    }
</style>
