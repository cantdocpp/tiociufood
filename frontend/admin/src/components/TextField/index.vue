<template>
    <textarea class="textarea" @input="$emit('update:modelValue', $event.target.value)"></textarea>
</template>

<style scoped>
    .textarea {
        box-sizing: border-box;
        width: 100%;
        max-width: 100%;
        min-width: 100%;
        outline: none;
        padding: 7px 10px;
        max-height: 200px;
        min-height: 100px;
    }
</style>
