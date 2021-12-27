<template>
    <input 
        :type="type"
        :placeholder="placeholder"
        class="input"
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
            required: true
        }
    }
}
</script>

<style scoped>
    .input {
        box-sizing: border-box;
        width: 100%;
        padding: 10px 13px;
        outline: none;
        font-size: 25px;
    }

    .input::placeholder {
        text-transform: capitalize;
        font-size: 25px;
    }
</style>