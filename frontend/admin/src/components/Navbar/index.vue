<template>
    <Container>
        <Box>
            <Link to="food">Makanan</Link>
            <Spacer x="10" />
            <Link to="restaurant">Restoran</Link>
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

