<template>
    <form class="form" @submit.prevent="$emit('submit')">
        <slot></slot>
    </form>
</template>
