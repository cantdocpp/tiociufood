<template>
    <div class="close" @click="$emit('close')">x</div>
</template>

<style scoped>
    .close {
        font-weight: 600;
        font-size: 20px;
        cursor: pointer;
        user-select: none;
    }
</style>
