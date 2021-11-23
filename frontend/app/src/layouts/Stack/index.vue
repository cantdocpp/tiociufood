<template>
    <div class="stack" :class="stackSpaceClass">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        space: {
            type: String,
            default: 'small'
        }
    },
    computed: {
        stackSpaceClass() {
            switch(this.space) {
                case 'small':
                    return 'stack--small'
                    break;
                case 'medium':
                    return 'stack--medium'
                    break;
                case 'large':
                    return 'stack--large'
                    break;
                default:
                    return 'stack--small'
            }
        }
    }
}
</script>

<style>
    .stack {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }

    .stack--small > * + * {
        margin-top: 0.5rem !important;
    }

    .stack--medium > * + * {
        margin-top: 1.5rem;
    }

    .stack--large > * + * {
        margin-top: 3.0rem;
    }
</style>
