<template>
    <Box>
        <Navbar />
        <router-view />
    </Box>
</template>

<script>
import Box from '@/layouts/Box'

import Navbar from '@/components/Navbar'

export default {
    components: {
        Box,
        Navbar
    }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Roboto+Slab:wght@300;400;500;600;700&family=Sora:wght@300;400;500;600;700&display=swap');

* {
    padding: 0;
    margin: 0;
    font-size: 14px;
    box-sizing: border-box;
    font-family: 'Playfair Display', serif;
}
</style>
