<template>
    <h1 class="header" :style="{ fontSize: fontSize }">
        <slot></slot>
    </h1>
</template>

<script>
export default {
    props: {
        level: {
            type: Number,
            default: 1
        },
        weight: {
            type: String,
            default: 'regular'
        }
    },
    computed: {
        fontSize() {
            switch(this.level) {
                case 1:
                    return '16px'
                    break;
                case 2:
                    return '24px'
                    break;
                case 3:
                    return '32px'
                    break;
                case 4:
                    return '48px'
                    break;
                default:
                    return '16px'
            }
        }
    }
}
</script>

<style scoped>
    .header {
        text-transform: capitalize;
    }
</style>
