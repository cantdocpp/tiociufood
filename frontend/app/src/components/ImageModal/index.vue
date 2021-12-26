<template>
    <div class="image-modal">
        <div class="image-modal__close__wrapper" @click="close">
            <i class="image-modal__close__icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="50" height="50" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 htOURl"><title>cross</title><path d="M11.42 10.42l3.54-3.54c0.38-0.4 0.38-1.040 0-1.42s-1.020-0.4-1.42 0l-3.54 3.54-3.54-3.54c-0.4-0.4-1.020-0.4-1.42 0s-0.38 1.020 0 1.42l3.54 3.54-3.54 3.54c-0.38 0.38-0.38 1.020 0 1.42 0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28l3.54-3.56 3.54 3.56c0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28c0.38-0.4 0.38-1.040 0-1.42l-3.54-3.54z"></path></svg>
            </i>
        </div>
        <div class="image-modal__wrapper">
            <img :src="getImage" alt="menu image" class="image-modal__image">
        </div>
        <div class="image-modal__page__wrapper">
            <span class="image-modal__page">
                {{ pageNow }} of {{ getImagesLength }}
            </span>
        </div>
        <div class="image-modal__page__arrow__left" v-if="pageNow > 1" @click="backwardPage">
            <i class="image-modal__arrow__wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="60" height="60" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 fJNfAg"><title>chevron-left</title><path d="M13.040 4.88c0.28 0.3 0.28 0.78 0 1.060l-4.48 4.48 4.48 4.46c0.28 0.3 0.28 0.78 0 1.060s-0.78 0.3-1.060 0l-5-5c-0.3-0.28-0.3-0.76 0-1.060l5-5c0.28-0.28 0.76-0.28 1.060 0z"></path></svg>
            </i>
        </div>
        <div class="image-modal__page__arrow__right" v-if="pageNow < getImagesLength" @click="forwardPage">
            <i class="image__modal__arrow__wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="60" height="60" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 fJNfAg"><title>chevron-right</title><path d="M6.98 15.94c-0.3-0.28-0.3-0.76 0-1.060l4.46-4.46-4.46-4.48c-0.3-0.28-0.3-0.76 0-1.060s0.76-0.28 1.060 0l5 5c0.28 0.3 0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0z"></path></svg>
            </i>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        images: {
            type: Array,
            required: true
        },
        pageNumber: {
            type: Number,
            default: 1
        }
    },
    data() {
        return {
            pageNow: this.pageNumber
        }
    },
    computed: {
        getImage() {
            return this.images[this.pageNow - 1]
        },
        getImagesLength() {
            return this.images.length
        },
    },
    methods: {
        forwardPage() {
            this.pageNow++
        },
        backwardPage() {
            this.pageNow--
        },
        close() {
            this.$emit('close')
        }
    }
}
</script>


<style scoped>
    .image-modal {
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100%;
        min-width: max-content;
        height: 100%;
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
        visibility: visible;
        overflow: auto;
        z-index: 11;
        background-color: rgb(28, 28, 28);
    }

    .image-modal__wrapper {
        position: absolute;
        min-width: 100vw;
        min-height: 100vh;
        background-color: rgb(28, 28, 28);
        padding-top: 2rem;
        padding-bottom: 2rem;
    }

    .image-modal__image {
        max-width: 80vw;
        min-width: 60vw;
        display: block;
        margin-left: auto;
        margin-right: auto;
        user-select: none;
    }

    .image-modal__close__wrapper {
        position: fixed;
        z-index: 11;
        right: 3rem;
        top: 2rem;
    }

    .image-modal__close__icon {
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    .image-modal__page__wrapper {
        position: fixed;
        bottom: 10rem;
        right: 12vw;
    }

    .image-modal__page {
        color: rgb(255, 255, 255);
        background: rgba(28, 28, 28, 0.4);
        backdrop-filter: blur(8px);
        font-size: 1.8rem;
        line-height: 1.2;
        padding: 1px 2px;
        border-radius: 0.6rem;
        user-select: none;
    }

    .image-modal__page__arrow__left {
        position: fixed;
        top: 50%;
        display: flex;
        left: 0px;
        padding: 0px 2rem;
        z-index: 10;
        cursor: pointer;
    }

    .image-modal__arrow__wrapper {
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    .image-modal__page__arrow__right {
        position: fixed;
        top: 50%;
        display: flex;
        right: 0px;
        padding: 0px 2rem;
        z-index: 10;
        cursor: pointer;
    }
</style>
