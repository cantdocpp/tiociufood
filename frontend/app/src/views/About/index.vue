<template>
    <div class="about">
        <div class="about__header" :style="{ backgroundImage: 'url(' + require('@/assets/dumpling.jpg') + ')' }">
            <div class="about__header__shadow"></div>
            <div class="about__header__content">
                <p class="about__header__tagline">Driven By Chinese Food You Will Love</p>
                <div class="about__header__link__wrapper">
                    <router-link to="/home" class="about__header__link">
                        Back to Home
                    </router-link>
                </div>
            </div>
        </div>
        <div class="about__content">
            <Purpose />
            <div class="about__who">
                <div class="about__who__content">
                    <div class="about__who__text">
                        <div class="about__who__title">
                            What is Tiociufood ?
                        </div>
                        <div class="about__who__line"></div>
                        <div class="about__who__desc">
                            Launch in 2021, Tiociufood is an technology platform that gives user some chinese food recommendation. User on our platform can discover restaurants, foods, read and write other user reviews, and check details regarding restaurants. On the other hands, our platform also giving user some food recommendation based on their tastes and reviews, in order to maximize their outputs.
                        </div>
                    </div>
                    <div class="about__who__image__wrapper">
                        <img :src="require('@/assets/who.jpg')" alt="" class="about__who__image">
                    </div>
                </div>
            </div>
            <div class="about__creator">
                <div class="about__who__content">
                    <div class="about__who__text">
                        <div class="about__who__title">
                            TIociufood Creator
                        </div>
                        <div class="about__who__desc">
                            Tiociufood was created by Philip Bryan Halim, an university student from Tarumanegara University in order to complete his thesis assignment and to help educate general people about tio ciu food.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Purpose from './components/Purpose.vue'

export default {
    components: {
        Purpose
    }
}
</script>


<style>
    .about__header {
        position: relative;
        height: 95vh;
        width: 100%;
    }

    .about__header__shadow {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.4);
    }

    .about__header__content {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 15%;
    }

    .about__header__tagline {
        color: #fff;
        font-size: 50px;
        font-weight: bold;
    }

    .about__header__link {
        text-decoration: none;
        color: #fff;
        padding: 10px;
        border: 1px solid #fff;
        border-radius: 4px;
    }

    .about__header__link__wrapper {
        margin-top: 50px;
        text-align: center;
    }

    .about__content {
        box-sizing: border-box;
        padding: 50px 0;
        width: 60%;
        margin: 0 auto;
    }

    .about__who__content {
        margin-top: 70px;
        display: flex;
        justify-content: space-between;
    }

    .about__who__text {
        width: 45%;
    }

    .about__who__image__wrapper {
        width: 45%;
    }

    .about__who__title {
        font-size: 40px;
        font-weight: bold;
        margin-bottom: 10px;
    }

    .about__who__line {
        border-bottom: 4px solid rgb(238, 85, 106);
        width: 8rem;
        margin-bottom: 2rem;
    }

    .about__who__image {
        width: 100%;
        height: 100%;
        border-radius: 5px;
    }

    .about__who__desc {
        line-height: 1.5;
        font-weight: lighter;
        font-size: 18px;
        color: rgb(54, 54, 54);
    }

    .carousel__item {
        min-height: 200px;
        width: 100%;
        background-color: var(--vc-clr-primary);
        color:  var(--vc-clr-white);
        font-size: 20px;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .carousel__prev,
    .carousel__next {
        background-color: #fff !important;
        color: #000 !important;
        box-shadow: rgb(0 0 0 / 20%) 0px 3px 5px -1px, rgb(0 0 0 / 14%) 0px 6px 10px 0px, rgb(0 0 0 / 12%) 0px 1px 18px 0px;
    }

    .carousel__next {
        top: 50%;
        right: 0;
        transform: translate(50%, -50%);
    }

    .carousel__prev {
        top: 50%;
        left: 0;
        transform: translate(-50%, -50%);
    }
</style>