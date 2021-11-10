<template>
    <input 
        :type="type"
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
            type: String,
            required: true
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
    }

    .input::placeholder {
        text-transform: capitalize;
    }
</style>