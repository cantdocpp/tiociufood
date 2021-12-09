<template>
    <div class="restaurant-detail">
        <ReviewModal 
            v-if="isReview"
            @close="closeModal"
            :foods="foods"
        />
        <Container v-if="!isLoading">
            <Box>
                <div class="restaurant__image__wrapper">
                    <div class="restaurant__main__image">
                        <img :src="restaurant.restaurantImage" alt="restaurant main image" class="restaurant__image">
                    </div>
                    <div class="restaurant__other__image">
                        <div class="restaurant__image__other" v-for="(photo, index) in getRestaurantPhotos" :key="index">
                            <img :src="photo" alt="restaurant photo" class="restaurant__image">
                        </div>
                        <section class="restaurant__image__add">
                            <div class="restaurant__image__box" style="background-image: url(https://b.zmtcdn.com/data/zomaland/a6750d1975cd3139cb91535088efb0c71578913426.jpeg?fit=around|69.75:68.25&crop=69.75:68.25;*,*)">
                                <div class="restaurant__image__add__absolute">
                                    <div class="restaurant__image__add__background">
                                        <i class="restaurant__image__add__logo" size="20" color="#FFFFFF"><svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="20" height="20" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 iRDDBk"><title>camera-add</title><path d="M8.82 7.32c-0.020 0-0.040 0-0.060 0-2.32 0-4.2 1.86-4.24 4.16v0c0.040 2.32 1.92 4.18 4.24 4.18 0.020 0 0.040 0 0.060 0v0c0 0 0.020 0 0.040 0 2.32 0 4.2-1.86 4.24-4.18v0c-0.040-2.3-1.92-4.16-4.24-4.16-0.020 0-0.040 0-0.060 0h0.020zM8.82 14.22c-0.020 0-0.020 0-0.020 0-1.52 0-2.78-1.2-2.84-2.74v0c0.040-1.52 1.26-2.74 2.8-2.74 0.020 0 0.040 0 0.060 0v0c0 0 0.020 0 0.040 0 1.54 0 2.78 1.22 2.8 2.74v0c-0.060 1.54-1.3 2.74-2.84 2.74 0 0 0 0 0 0v0zM16.66 10.42c-0.12 0-0.24 0.1-0.24 0.24v0 4.34c0 1.42-1.16 2.56-2.58 2.56 0 0 0 0 0 0h-9.82c0 0 0 0 0 0-1.42 0-2.58-1.14-2.6-2.56v-6.22c0.020-1.34 1.1-2.42 2.44-2.42 0.020 0 0.020 0 0.040 0v0h0.38c0.3 0 0.54-0.16 0.66-0.4v-0.020l0.94-1.98c0.2-0.4 0.58-0.68 1.060-0.68v0h2.32c0 0 0 0 0 0 0.48 0 0.88 0.28 1.080 0.68v0l0.94 1.98c0.12 0.26 0.36 0.42 0.66 0.42h0.44s0-0.84 0-1.080c0-0.24-0.060-0.46-0.16-0.66v0.020l-0.58-1.28c-0.42-0.9-1.34-1.52-2.38-1.52 0 0 0 0 0 0h-2.32c0 0 0 0 0 0-1.060 0-1.96 0.62-2.38 1.52v0l-0.74 1.58c-2.1 0.020-3.8 1.72-3.82 3.8v0 6.22c0 0 0 0.020 0 0.020 0 2.22 1.8 4 4.020 4 0 0 0 0 0 0h9.82c0 0 0 0 0 0 2.2 0 4-1.78 4-3.98v-4.34c0-0.14-0.1-0.24-0.22-0.24v0zM19.28 5.42h-1.9v-1.9c0-0.4-0.32-0.72-0.72-0.72s-0.7 0.32-0.7 0.72v0 1.9h-1.92c-0.38 0-0.7 0.32-0.7 0.7s0.32 0.72 0.7 0.72v0h1.92v1.9c0 0.4 0.32 0.72 0.7 0.72s0.72-0.32 0.72-0.72v0-1.9h1.9c0.4 0 0.72-0.32 0.72-0.72s-0.32-0.7-0.72-0.7v0z"></path></svg></i>
                                    </div>
                                    Add Photos
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <Stack>
                    <Title :size="35">
                        {{ restaurant.restaurantName }}
                    </Title>
                    <Box>
                        <Text :size="18">
                            {{ restaurant.restaurantAddress }}
                        </Text>
                    </Box>
                    <Box>
                        <Text>
                            {{ restaurant.restaurantSchedule }}
                        </Text>
                    </Box>
                    <Spacer :margin-top="10" />
                    <Box>
                        <Button @click="openModal">
                            Add Review
                        </Button>
                    </Box>
                </Stack>
            </Box>
            <Spacer :margin-top="30" />
            <Box>
                <Title :size="25">
                    User Review
                </Title>
                <Review :restaurant-name="restaurant.restaurantName" />
            </Box>
        </Container>
        <Container v-if="isLoading">
            loading...
        </Container>
    </div>
</template>

<script>
import ReviewModal from './components/ReviewModal'
import Review from './components/Review'

import Title from '@/components/Title'
import Text from '@/components/Text'
import Button from '@/components/Button'
import Modal from '@/components/Modal'

import Container from '@/layouts/Container'
import Spacer from '@/layouts/Spacer'
import Box from '@/layouts/Box'
import Stack from '@/layouts/Stack'

import { get_restaurant_detail } from '@/api/restaurant'

export default {
    data() {
        return {
            isLoading: true,
            isReview: false,
            restaurant: {},
            foods: []
        }
    },
    computed: {
        getRestaurantPhotos() {
            if (this.restaurant.restaurantPhotos.length < 6) {
                return this.restaurant.restaurantPhotos
            }
            const photos = []
            for (let i = 0; i < 5; i++) {
                photos.push(this.restaurant.restaurantPhotos[i])
            }
            return photos
        }
    },
    methods: {
        openModal() {
            this.isReview = true
        },
        closeModal() {
            this.isReview = false
            this.$router.go()
        }
    },
    async created() {
        const restaurantNameDash = this.$route.params.restaurantName
        const restaurantDetail = await get_restaurant_detail(restaurantNameDash)
        console.log(restaurantDetail)
        const restaurantFoods = restaurantDetail.restaurantData.Items[0].restaurantFood.split(',')
        this.restaurant = restaurantDetail.restaurantData.Items[0]
        this.foods = restaurantFoods
        this.isLoading = false
    },
    components: {
        ReviewModal,
        Review,
        Title,
        Text,
        Button,
        Modal,
        Container,
        Spacer,
        Box,
        Stack
    }
}
</script>

<style scoped>
    .restaurant__image__wrapper {
        height: 300px;
        display: flex;
        justify-content: space-between;
    }

    .restaurant__main__image {
        height: 100%;
        width: 49%;
    }

    .restaurant__image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .restaurant__other__image {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 49%;
    }

    .restaurant__image__add {
        width: 32%;
        height: 48%;
        position: relative;
        cursor: pointer;
    }

    .restaurant__image__other {
        width: 32%;
        height: 48%;
        position: relative;
        cursor: pointer;
    }

    .restaurant__image__box {
        background-repeat: no-repeat;
        width: 100%;
        height: 100%;
        background-size: cover;
    }

    .restaurant__image__add__absolute {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #fff;
        text-transform: capitalize;
    }

    .restaurant__image__add__background {
        display: flex;
        justify-content: center;
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        margin: 0px auto;
        background-color: rgba(79, 79, 79, 0.6);
    }

    .restaurant__image__add__logo {
        display: flex;
        align-items: center;
    }
</style>
