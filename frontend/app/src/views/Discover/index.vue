<template>
    <div class="discover">
        <Container>
            <Spacer :margin-top="30" />
            <div v-if="loading">
                loading...
            </div>
            <Grid 
                template-columns="repeat(4, 1fr)"
                :column-gap="30"
                :row-gap="40"
                v-if="!loading"
            >
                <Link 
                    name="DiscoverRestaurantDetail"
                    :params="{
                        restaurantName: joinRestaurantName(restaurant.restaurantName)
                    }"
                    v-for="(restaurant, index) in restaurants"
                    :key="index"
                >
                    <RestaurantCard />
                </Link>
            </Grid>
        </Container>
    </div>
</template>

<script>
import { get_restaurant } from '@/api/restaurant'

import Link from '@/components/Link'
import RestaurantCard from '@/components/RestaurantCard'

import Container from '@/layouts/Container'
import Spacer from '@/layouts/Spacer'
import Grid from '@/layouts/Grid'

export default {
    data() {
        return {
            restaurants: [],
            loading: true
        }
    },
    methods: {
        joinRestaurantName(name) {
            const nameDash = name.split(' ').join('-')
            return nameDash
        }
    },
    async created() {
        const restaurants = await get_restaurant()
        this.restaurants = restaurants
        this.loading = false
    },
    components: {
        Link,
        RestaurantCard,
        Container,
        Spacer,
        Grid
    }
}
</script>
