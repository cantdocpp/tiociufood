<template>
    <input 
        type="file" 
        class="input" 
        accept="image/png, image/jpeg"
        @change="$emit('change', $event)"
    >
</template>
