<template>
    <div class="spacer" :style="{ marginLeft: `${x}px`, marginTop: `${y}px` }" :class="[spaceDisplayClass]"></div>
</template>

<script>
export default {
    props: {
        display: {
            type: String,
            default: 'block'
        },
        x: {
            type: Number,
            default: 0
        },
        y: {
            type: Number,
            default: 0
        }
    },
    computed: {
        spaceDisplayClass() {
            return `spacer--${this.display}`
        }
    }
}
</script>

<style scoped>
    .spacer--block {
        display: block;
    }

    .spacer--inline {
        display: inline-block;
    }
</style>
