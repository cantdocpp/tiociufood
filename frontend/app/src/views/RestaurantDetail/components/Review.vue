<template>
    <div class="review">
        <div class="review__content" v-if="!isLoading">
            <div class="review__card__wrapper" v-if="reviews.length > 0">
                <div class="review__card" v-for="(review, index) in reviews" :key="index">
                    <div class="review__card__header">
                        <img :src="require('@/assets/user-image.jpg')" alt="" class="review__card__profile">
                        <div class="review__card__header__data">
                            <div class="review__card__user">
                                {{ review.username }}
                            </div>
                            <div class="review__card__date">
                                {{ getDate(review.time) }}
                            </div>
                        </div>
                    </div>
                    <div class="review__card__content">
                        <div class="review__restaurant">
                            <div class="review__star" :style="{ backgroundColor: getStateColor(review.reviewRate) }">
                                <span class="review__star__number" v-if="!review.passed">{{ review.reviewRate }}</span>
                                <div class="review__star__logo" v-if="!review.passed">
                                    <i class="sc-rbbb40-1 iFnyeo" color="#B5B5B5"><svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="10px" height="10px" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 ffadyU"><title>star-fill</title><path d="M6.76 6.8l-6.38 0.96c-0.22 0.040-0.38 0.22-0.38 0.44 0 0.12 0.040 0.24 0.12 0.32v0l4.64 4.76-1.1 6.66c0 0.020 0 0.040 0 0.080 0 0.24 0.2 0.44 0.44 0.44 0.1 0 0.16-0.020 0.24-0.060v0l5.7-3.12 5.68 3.12c0.060 0.040 0.14 0.060 0.22 0.060 0.24 0 0.44-0.2 0.44-0.44 0-0.040 0-0.060 0-0.080v0l-1.1-6.66 4.64-4.76c0.080-0.080 0.12-0.2 0.12-0.32 0-0.22-0.16-0.4-0.36-0.44h-0.020l-6.38-0.96-2.96-6.18c-0.060-0.12-0.18-0.2-0.32-0.2s-0.26 0.080-0.32 0.2v0z"></path></svg></i>
                                </div>
                            </div>
                            <span class="review__restaurant__text"> {{ getStateText(review.reviewRate) }} </span>
                        </div>
                        <div class="review__restaurant__content">
                            {{ review.restaurantReviewContent }}
                        </div>
                        <div class="review__restaurant__photos__wrapper">
                            <img :src="image" alt="review image" class="review__restaurant__photo" v-for="(image, imageIndex) in review.reviewImages" :key="imageIndex">
                        </div>
                    </div>
                </div>
            </div>
            <div class="review__empty" v-if="reviews.length === 0">
                sorry, there's no review for this restaurant yet
            </div>
        </div>
        <div class="review__loading" v-if="isLoading">
            loading...
        </div>
    </div>
</template>

<script>
import { get_restaurant_reviews } from '@/api/review'

export default {
    props: {
        restaurantName: {
            type: String,
            required: true,
        }
    },
    data() {
        return {
            isLoading: true,
            reviews: []
        }
    },
    methods: {
        getDate(date) {
            const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            const newDate = new Date(date)
            console.log(newDate)

            return `${monthNames[newDate.getMonth()]} ${newDate.getDay()}, ${newDate.getFullYear()}`
        },
        getStateColor(review) {
            switch (review) {
                case 0:
                    return '#fff'
                    break;
                case 1: 
                    return 'rgb(239, 79, 95)'
                    break;
                case 2:
                    return 'rgb(255, 126, 139)'
                    break;
                case 3:
                    return 'rgb(233, 181, 1)'
                    break;
                case 4:
                    return 'rgb(36, 150, 63)'
                    break;
                case 5:
                    return 'rgb(14, 80, 32)'
                    break;
                default:
                    return '#fff'
            }
        },
        getStateText(review) {
            const reviewStarValue = [
                {
                    text: 'horrible',
                    value: 1,
                    passed: false,
                    picked: false
                },
                {
                    text: 'bad',
                    value: 2,
                    passed: false,
                    picked: false
                },
                {
                    text: 'average',
                    value: 3,
                    passed: false,
                    picked: false
                },
                {
                    text: 'good',
                    value: 4,
                    passed: false,
                    picked: false
                },
                {
                    text: 'excellent',
                    value: 5,
                    passed: false,
                    picked: false
                },
            ]

            const text = reviewStarValue.find(val => val.value === review)
            return text.text
        }
    },
    async created() {
        const res = await get_restaurant_reviews({
            restaurantName: this.restaurantName
        })

        this.reviews = res.reviewData
        this.isLoading = false
    }
}
</script>

<style scoped>
    .review__content {
        margin-top: 20px;
    }

    .review__card__header {
        display: flex;
        align-items: center;
    }

    .review__card__profile {
        height: 50px;
        width: 50px;
        border-radius: 50%;
    }

    .review__card__user {
        text-transform: capitalize;
        font-weight: bold;
        font-size: 17px;
    }

    .review__card__header__data {
        margin-left: 10px;
    }

    .review__restaurant {
        margin-top: 10px;
        margin-left: 5px;
        display: flex;
        align-items: center;
    }

    .review__restaurant__text {
        margin-left: 10px;
    }

    .review__restaurant__content {
        margin-left: 5px;
        margin-top: 5px;
    }

    .review__restaurant__photos__wrapper {
        margin-top: 10px;
        display: flex;
    }

    .review__restaurant__photo {
        max-width: 20%;
        height: 150px;
        border-radius: 5px;
    }

    .review__restaurant__photo + .review__restaurant__photo {
        margin-left: 5px;
    }

    .review__star {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 25px;
        width: 30px;
        font-weight: bold;
        box-sizing: border-box;
        padding: 1px 18px;
        color: #fff;
        border: 1px solid rgb(181, 181, 181);
        border-radius: 5px;
        user-select: none;
    }

    .review__star__number {
        margin-top: -5px;
        font-size: 21px;
    }

    .review__star__logo {
        margin-left: 3px;
    }
</style>
