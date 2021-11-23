<template>
    <div 
        class="spacer" 
        :style="{
            marginLeft: `${marginLeft}px`,
            marginTop: `${marginTop}px`,
            marginRight: `${marginRight}px`,
            marginBottom: `${marginBottom}px`,
        }"></div>
</template>

<script>
export default {
    props: {
        marginLeft: {
            type: Number,
            default: 0
        },
        marginTop: {
            type: Number,
            default: 0
        },
        marginRight: {
            type: Number,
            default: 0
        },
        marginBottom: {
            type: Number,
            default: 0
        },
    }
}
</script>
