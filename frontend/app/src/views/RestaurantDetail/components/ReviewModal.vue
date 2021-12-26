<template>
    <div class="review-modal">
        <Modal title="Add Review" v-bind="$attrs">
            <Text>
                step: {{ step }}
            </Text>
            <Spacer :margin-top="20" />
            <Box v-if="step === 1">
                <Stack space="medium">
                    <Title :size="20">
                        What food did you buy ?
                    </Title>
                    <Grid template-columns="repeat(4, 1fr)" :row-gap="5" :column-gap="5">
                        <div class="checkbox__wrapper" v-for="(food, index) in foods" :key="index">
                            <input type="checkbox" :value="food" :name="food" v-model="eatenFood">
                            <label :for="food"> {{ food }} </label>
                        </div>
                    </Grid>
                    <Flex justify="flex-end">
                        <Button @click="next">
                            Next
                        </Button>
                    </Flex>
                </Stack>
            </Box>
            <Box v-if="step === 2">
                <Stack space="medium">
                    <Box v-if="eatenFood.length > 0">
                        <Box v-for="(food, index) in form.foods" :key="index">
                            <Stack>
                                <Title :size="20">
                                    {{ food.foodName }} food review
                                </Title>
                                <ReviewStar @review="rateFood(index, $event)" />
                                <Textfield v-model="form.foods[index].review"></Textfield>
                            </Stack>
                        </Box>
                    </Box>
                    <Box v-else>
                        You haven't choose any food on the first step
                    </Box>
                    <Flex justify="flex-end">
                        <Button type="secondary" @click="back">
                            Back
                        </Button>
                        <Spacer :margin-left="10" />
                        <Button @click="next">
                            Next
                        </Button>
                    </Flex>
                </Stack>
            </Box>
            <Box v-if="step === 3">
                <Stack space="medium">
                    <Box>
                        <Title :size="20">
                            Rate this restaurant
                        </Title>
                        <Spacer :margin-top="10" />
                        <ReviewStar @review="restaurantReview" />
                    </Box>
                    <Box>
                        <Title :size="20">
                            Say something about this restaurant
                        </Title>
                        <Spacer :margin-top="10" />
                        <Textfield v-model="form.restaurant.review"></Textfield>
                    </Box>
                    <Flex justify="flex-end">
                        <Button type="secondary" @click="back">
                            Back
                        </Button>
                        <Spacer :margin-left="10" />
                        <Button @click="next">
                            Next
                        </Button>
                    </Flex>
                </Stack>
            </Box>
            <Box v-if="step === 4">
                <Box>
                    <Title :size="20">
                        Add Images
                    </Title>
                    <Spacer :margin-top="20" />
                    <Box>
                        <div class="upload__wrapper">
                            <span class="upload__text">Browse image to upload</span>
                            <div class="upload__image__wrapper">
                                <section class="uploaded__box" v-for="(image, index) in uploadImage" :key="index">
                                    <img :src="image" alt="upload logo" class="uploaded__image">
                                    <span class="uploaded__image__x" @click="removeImage(index)">x</span>
                                </section>
                                <section class="upload__box" :class="{ 'upload__box--center': uploadImage.length === 0 }">
                                    <img src="https://b.zmtcdn.com/webuikit/4256c1e7cbe4e3d51f54cbee6e6e6a6d1580794982.png" alt="upload logo" class="upload__logo">
                                    <input type="file" name="myfile" accept="image/*" multiple class="upload__input" @change="fileChange($event.target.files)">
                                </section>
                            </div>
                        </div>
                    </Box>
                </Box>
                <Flex justify="flex-end">
                    <Button type="secondary" @click="back">
                        Back
                    </Button>
                    <Spacer :margin-left="10" />
                    <Button @click="submit" :submit="isSubmit">
                        Submit
                    </Button>
                </Flex>
            </Box>
        </Modal>
    </div>
</template>

<script>
import ReviewStar from './ReviewStar.vue'

import Modal from '@/components/Modal'
import Title from '@/components/Title'
import Text from '@/components/Text'
import Textfield from '@/components/Textfield'
import Button from '@/components/Button'

import Box from '@/layouts/Box'
import Spacer from '@/layouts/Spacer'
import Stack from '@/layouts/Stack'
import Flex from '@/layouts/Flex'
import Grid from '@/layouts/Grid'

import { add_review_restaurant, add_review_food } from '@/api/review'
import { upload_images } from '@/api/uploader'

export default {
    props: {
        foods: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            step: 1,
            form: {
                restaurant: {
                    rate: 0,
                    review: ''
                },
                foods: []
            },
            eatenFood: [],
            uploadImage: [],
            uploadedImage: [],
            uploadImageLinks: [],
            isSubmit: false
        }
    },
    methods: {
        restaurantReview(value) {
           this.form.restaurant.rate = value
        },
        next() {
            this.step++
        },
        back() {
            this.step--
        },
        rateFood(index, rate) {
            this.form.foods[index].rate = rate
        },
        async submitImage() {
            console.log(this.uploadedImage)
            const formData = new FormData()
            for (let i = 0; i < this.uploadedImage.length; i++) {
                formData.append('files', this.uploadedImage[i])
            }
            
            try {
                const res = await upload_images(formData)
                this.uploadImageLinks = res.data.images
            } catch(err) {
                console.log(err)
            }
        },
        async submitRestaurant() {
            const restaurantName = this.$route.params.restaurantName.split('-').join(' ')
            const userState = this.$store.getters.userStateData
            const userEmail = userState.email
            const username = userState.username
            const userRestaurant = JSON.parse(JSON.stringify(this.form.restaurant))
            const foodReview = JSON.parse(JSON.stringify(this.form.foods))
            const time = Date.now()

            const restaurantData = {
                restaurantName: restaurantName,
                userEmail: userEmail,
                foodReview: foodReview,
                reviewImages: this.uploadImageLinks,
                username: username,
                time: time,
                ...userRestaurant
            }

            await add_review_restaurant(restaurantData)
        },
        async submitFood() {
            const restaurantName = this.$route.params.restaurantName.split('-').join(' ')
            const userState = this.$store.getters.userStateData
            const userEmail = userState.email
            const username = userState.username
            const userFormFoods = JSON.parse(JSON.stringify(this.form.foods));

            const foodData = {
                restaurantName: restaurantName,
                userEmail: userEmail,
                username: username,
                reviews: userFormFoods
            }

            const res = await add_review_food(foodData)
            console.log(res)
        },
        async submit() {
            this.isSubmit = true
            if (this.uploadImage) {
                await this.submitImage()
            }
            await this.submitRestaurant()
            await this.submitFood()
            this.isSubmit = false

            this.$emit('close')
        },
        getImageUrl(file) {
            const reader = new FileReader();
            reader.onload = e => {
                const url = e.target.result;
                this.uploadImage.push(url)
                
                return url;
            };
            reader.readAsDataURL(file);
        },
        fileChange(files) {
            this.uploadedImage = files
            const uploadedImageTotal = files.length;
            for (let i = 0; i < uploadedImageTotal; i++) {
                this.getImageUrl(files[i]);
            }
            this.$emit('other-image', this.uploadedImage);
        },
        removeImage(index) {
            this.uploadImage.splice(index, 1)
        }
    },
    watch: {
        eatenFood(newFood) {
            const foodReview = []
            newFood.forEach(food => {
                foodReview.push({
                    foodName: food,
                    review: '',
                    rate: 0
                })
            })
            this.form.foods = foodReview
        }
    },
    components: {
        ReviewStar,
        Modal,
        Title,
        Text,
        Textfield,
        Button,
        Box,
        Spacer,
        Stack,
        Flex,
        Grid
    }
}
</script>

<style scoped>
    .upload__wrapper {
        text-align: center;
    }

    .upload__text {
        text-align: center;
        display: inherit;
        font-size: 20px;
        color: rgb(156, 156, 156);
        margin-bottom: 20px;
    }

    .upload__box {
        position: relative;
        cursor: pointer;
        display: inline-block;
        border: 1px dashed rgb(206, 206, 206);
        border-radius: 4px;
        margin-left: 10px;
        width: 25%;
        height: 110px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 10px;
    }

    .upload__box--center {
        margin: 0 auto;
    }

    .upload__logo {
        box-sizing: border-box;
    }

    .upload__input {
        width: 100%;
        cursor: pointer;
        font-size: 1rem;
        position: absolute;
        left: 0px;
        top: 0px;
        opacity: 0;
        height: 10rem;
        margin: 1rem 0px 2rem;
    }

    .upload__uploaded {
        display: flex;
    }

    .upload__image__wrapper {
        display: flex;
        flex-wrap: wrap;
    }

    .uploaded__box {
        width: 25%;
        height: 110px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        margin-top: 10px;
    }

    .uploaded__box + .uploaded__box  {
        margin-left: 10px;
    }

    .uploaded__image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 4px;
    }

    .uploaded__image__x {
        position: absolute;
        top: -5px;
        right: -5px;
        background: red;
        color: #fff;
        padding: 2px 6px;
        border-radius: 50%;
        cursor: pointer;
    }
</style>
