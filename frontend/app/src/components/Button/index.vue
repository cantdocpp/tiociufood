<template>
    <button class="button" :class="[buttonTypeClass, buttonWidthClass]">
        <span class="button__text" :class="{ 'button__text--loading': submit }">
            <slot></slot>
        </span>
        <div class="button__loading__wrapper" v-if="submit">
            <span class="button--loading"></span>
        </div>
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
        },
        submit: {
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
        position: relative;
        display: block;
        box-sizing: border-box;
        padding: 7px 10px;
        border: none;
        border-radius: 4px;
        font-weight: 600;
        cursor: pointer;
    }

    .button__text--loading {
        visibility: hidden;
        opacity: 0;   
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

    .button--loading::after {
        content: "";
        position: absolute;
        width: 16px;
        height: 16px;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        border: 4px solid transparent;
        border-top-color: #ffffff;
        border-radius: 50%;
        animation: button-loading-spinner 1s ease infinite;
    }

    @keyframes button-loading-spinner {
        from {
            transform: rotate(0turn);
        }

        to {
            transform: rotate(1turn);
        }
    }
</style>
