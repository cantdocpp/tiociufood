<template>
    <div class="discover">
        <Container>
            <Spacer :margin-top="30" />
            <Grid 
                template-columns="repeat(4, 1fr)"
                :column-gap="30"
                :row-gap="40"
            >
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
            </Grid>
        </Container>
    </div>
</template>

<script>
import RestaurantCard from '@/components/RestaurantCard'

import Container from '@/layouts/Container'
import Spacer from '@/layouts/Spacer'
import Grid from '@/layouts/Grid'

export default {
    components: {
        RestaurantCard,
        Container,
        Spacer,
        Grid
    }
}
</script>
