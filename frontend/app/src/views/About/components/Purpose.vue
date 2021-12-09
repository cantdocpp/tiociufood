<template>
    <div class="purpose">
        <h1 class="purpose__title">Our Purposes</h1>
        <Carousel v-model="slideNumber">
            <Slide v-for="slide in getImageList" :key="slide">
                <div class="item" :style="{ backgroundImage: 'url(' + slide + ')' }"></div>
            </Slide>
            
            <template #addons>
                <Navigation />
            </template>
        </Carousel>
        <div class="purpose__content__wrapper">
            <div class="purpose__content__item" v-if="slideNumber === 0">
                <h1 class="purpose__content__title">
                    Driving the force of <span class="purpose__content__bold">assortment</span>
                </h1>
                <p class="purpose__content__subtitle">
                    We want to empowering our users in discovering new tastes and experiences across cities. By putting together meticulous recommendation for our users, we enable them to make an informed choice.
                </p>
            </div>
            <div class="purpose__content__item" v-if="slideNumber === 1">
                <h1 class="purpose__content__title">
                    Educating <span class="purpose__content__bold">user</span>
                </h1>
                <p class="purpose__content__subtitle">
                    We believe that giving user some education about the foods that they're going to buy.
                </p>
            </div>
            <div class="purpose__content__item" v-if="slideNumber === 2">
                <h1 class="purpose__content__title">
                    Focusing on <span class="purpose__content__bold">food quality</span>
                </h1>
                <p class="purpose__content__subtitle">
                    We are committed to nurturing a neutral platform and are helping food establishments maintain high standards through Hyperpure. Food Hygiene Ratings is a coveted mark of quality among our restaurant lists.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default {
    data() {
        return {
            slideNumber: 0
        }
    },
    computed: {
        getImageList() {
            const imageArr = []
            imageArr.push(require('@/assets/carousel-1.jpg'))
            imageArr.push(require('@/assets/carousel-2.jpg'))
            imageArr.push(require('@/assets/carousel-3.jpg'))

            return imageArr
        }
    },
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
};
</script>

<style scoped>
    .purpose__title {
        font-size: 30px;
        text-align: center;
        margin-bottom: 20px;
    }

    .item {
        height: 600px;
        width: 100%;
        background-position: center;
        background-repeat: no-repeat;
        border-radius: 5px;
    }

    .item__image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .purpose__content__wrapper {
        margin-top: 10px;
    }

    .purpose__content__title {
        font-size: 30px;
    }

    .purpose__content__bold {
        font-size: inherit;
        color: rgb(239, 79, 95);
    }

    .purpose__content__subtitle {
        font-weight: lighter;
        margin-top: 10px;
        font-size: 17px;
        color: rgb(54, 54, 54);
    }
</style>
