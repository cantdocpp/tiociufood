<template>
    <button class="button" :class="[buttonTypeClass, buttonWidthClass]">
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
        padding: 7px 10px;
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
        background: rgb(239, 79, 95);
        font-weight: bold;
    }

    .button--primary:hover {
        background: rgb(224, 53, 70);
    }

    .button--secondary {
        color: rgb(239, 79, 95);
        background: #fff;
        border: 1px solid rgb(239, 79, 95);
    }
</style>
