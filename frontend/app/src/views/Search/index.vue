<template>
    <div class="search">
        <Container>
            <Spacer :margin-top="30" />
            <Box v-if="loading">
                loading...
            </Box>
            <Box v-if="!loading">
                <Box v-if="restaurants.length > 0">
                    <Grid 
                        template-columns="repeat(4, 1fr)"
                        :column-gap="30"
                        :row-gap="40"
                    >
                        <Link 
                            name="DiscoverRestaurantDetail"
                            :params="{
                                restaurantName: joinRestaurantName(restaurant.restaurantName)
                            }"
                            v-for="(restaurant, index) in restaurants"
                            :key="index"
                        >
                            <RestaurantCard 
                                :restaurant-data="restaurant" 
                            />
                        </Link>
                    </Grid>
                </Box>
                <Box v-if="restaurants.length === 0">
                    <Text :size="20">
                        Sorry, we couldn't find the restaurant that you're searching for...
                    </Text>
                </Box>
            </Box>
        </Container>
    </div>
</template>

<script>
import { get_search_result } from '@/api/search'

import Link from '@/components/Link'
import Text from '@/components/Text'
import RestaurantCard from '@/components/RestaurantCard'

import Container from '@/layouts/Container'
import Spacer from '@/layouts/Spacer'
import Grid from '@/layouts/Grid'
import Box from '@/layouts/Box'

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
        const query = this.$route.query.restaurant
        const res = await get_search_result({
            searchText: query
        })
        this.restaurants = res.result.Items
        this.loading = false
    },
    components: {
        Link,
        Text,
        RestaurantCard,
        Container,
        Spacer,
        Grid,
        Box
    }
}
</script>

