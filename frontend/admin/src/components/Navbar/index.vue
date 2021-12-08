<template>
    <Container>
        <Box>
            <Link to="food">Makanan</Link>
            <Spacer 
                display="inline"
                :x="10" 
            />
            <Link to="restaurant">Restoran</Link>
            <Spacer 
                display="inline"
                :x="10" 
            />
            <Link to="training-data">Training Data</Link>
        </Box>
    </Container>
</template>

<script>
import Container from '@/components/Container'
import Box from '@/components/Box'
import Link from '@/components/Link'
import Spacer from '@/components/Spacer'

export default {
    components: {
        Container,
        Box,
        Link,
        Spacer
    }
}
</script>

