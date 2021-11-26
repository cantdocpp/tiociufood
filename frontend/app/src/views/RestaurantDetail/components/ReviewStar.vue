<template>
    <div class="review-star">
        <div class="review-star__rate">
            <div 
                class="review-star__block"
                v-for="(review, index) in reviewData" 
                :key="index"
                :style="{
                    ...getBackgroundColor(index)
                }"
                :class="{
                    'review-star__block--active': review.picked
                }"
                @click="setReview(index)"
            >
                <span class="review-star__number" v-if="!review.passed">{{ review.value }}</span>
                <div class="review-star__logo" v-if="!review.passed">
                    <i class="sc-rbbb40-1 iFnyeo" color="#B5B5B5"><svg xmlns="http://www.w3.org/2000/svg" fill="#B5B5B5" width="10px" height="10px" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 ffadyU"><title>star-fill</title><path d="M6.76 6.8l-6.38 0.96c-0.22 0.040-0.38 0.22-0.38 0.44 0 0.12 0.040 0.24 0.12 0.32v0l4.64 4.76-1.1 6.66c0 0.020 0 0.040 0 0.080 0 0.24 0.2 0.44 0.44 0.44 0.1 0 0.16-0.020 0.24-0.060v0l5.7-3.12 5.68 3.12c0.060 0.040 0.14 0.060 0.22 0.060 0.24 0 0.44-0.2 0.44-0.44 0-0.040 0-0.060 0-0.080v0l-1.1-6.66 4.64-4.76c0.080-0.080 0.12-0.2 0.12-0.32 0-0.22-0.16-0.4-0.36-0.44h-0.020l-6.38-0.96-2.96-6.18c-0.060-0.12-0.18-0.2-0.32-0.2s-0.26 0.080-0.32 0.2v0z"></path></svg></i>
                </div>
            </div>
        </div>
        <div class="review-star__text">
            {{ userReviewText }}
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            stateColor: 'rgb(181, 181, 181)',
            reviewData: [
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
            ],
            userReview: 0,
            userReviewText: ''
        }
    },
    methods: {
        getStateColor() {
            switch (this.userReview) {
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
        setReview(reviewIndex) {
            const reviewValue = reviewIndex + 1
            this.userReviewText = this.reviewData[reviewIndex].text
            this.reviewData.forEach((data, index) => {
                if (index < reviewIndex) {
                    data.passed = true
                } else {
                    data.passed = false
                }

                if (index === reviewIndex) {
                    data.picked = true
                } else {
                    data.picked = false
                }
            })
            this.userReview = reviewValue
            this.$emit('review', reviewValue)
        },
        getBackgroundColor(index) {
            const passed = this.reviewData[index].passed
            const picked = this.reviewData[index].picked
            if (passed) {
                const backgroundColor = this.getStateColor()
                return {
                    backgroundColor: backgroundColor
                }
            }

            if (picked) {
                const backgroundColor = this.getStateColor()
                return {
                    backgroundColor: backgroundColor
                }
            }
        }
    },
}
</script>

<style scoped>
    .review-star {
        display: flex;
        align-items: center;
    }

    .review-star__rate {
        display: flex;
    }

    .review-star__number {
        margin-top: -5px;
        font-size: 21px;
    }

    .review-star__block {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 25px;
        width: 30px;
        font-weight: bold;
        box-sizing: border-box;
        padding: 1px 18px;
        color: rgb(181, 181, 181);
        border: 1px solid rgb(181, 181, 181);
        border-radius: 5px;
        user-select: none;
    }

    .review-star__logo {
        margin-left: 3px;
    }

    .review-star__block + .review-star__block {
        margin-left: 5px;
    }

    .review-star__text {
        margin-top: -3px;
        margin-left: 10px;
        font-size: 16px;
    }

    .review-star__block--active {
        color: #fff
    }

    .review-star__block--active svg {
        fill: #fff;
    }

    .review-star__block--passed {
        background: rgb(14, 80, 32);
        border: 1px solid rgb(14, 80, 32);
    }
</style>
