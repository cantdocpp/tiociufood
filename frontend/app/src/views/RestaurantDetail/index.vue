<template>
    <div class="restaurant-detail">
        <ReviewModal 
            v-if="isReview"
            @close="closeModal"
            :foods="foods"
        />
        <Container v-if="!isLoading">
            <Box>
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
        </Container>
        <Container v-if="isLoading">
            loading...
        </Container>
    </div>
</template>

<script>
import ReviewModal from './components/ReviewModal'

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
    methods: {
        openModal() {
            this.isReview = true
        },
        closeModal() {
            this.isReview = false
        }
    },
    async created() {
        const restaurantNameDash = this.$route.params.restaurantName
        const restaurantDetail = await get_restaurant_detail(restaurantNameDash)
        const restaurantFoods = restaurantDetail.restaurantData.Items[0].restaurantFood.split(',')
        this.restaurant = restaurantDetail.restaurantData.Items[0]
        this.foods = restaurantFoods
        this.isLoading = false
    },
    components: {
        ReviewModal,
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
