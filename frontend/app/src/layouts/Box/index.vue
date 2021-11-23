<template>
    <div class="box" :class="[ getTypeClass ]">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'block'
        }
    },
    computed: {
        getTypeClass() {
            this.type === 'block' ? 'box--block' : 'box--inline'
        }
    }
}
</script>

<style scoped>
    .box {
        box-sizing: border-box;
    }
    
    .box--block {
        display: block;
    }

    .box--inline {
        display: inline-block;
    }
</style>
