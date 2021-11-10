<template>
    <button class="button" :class="[buttonTypeClass, buttonWidthClass]" @click="$emit('click')">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'primary'
        },
        maxWidth: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        buttonTypeClass() {
            return `button--${this.type}`
        },
        buttonWidthClass() {
            return this.maxWidth ? 'button--max' : null
        }
    }
}
</script>

<style scoped>
    .button {
        display: block;
        box-sizing: border-box;
        padding: 8px 10px;
        border: none;
        border-radius: 4px;
        font-weight: 600;
        cursor: pointer;
    }

    .button--max {
        width: 100%;
    }

    .button--primary {
        color: #fff;
        background: #000;
    }

    .button--secondary {
        color: #000;
        background: #fff;
    }
</style>
