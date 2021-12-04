<template>
    <nav class="nav" v-if="showNavbar">
        <Container>
            <Flex justify="space-between" align="center">
                <NavLink to="/">
                    <Text :size="32" weight="bold">
                        Tiociufood
                    </Text>
                </NavLink>
                <Flex align="center">
                    <NavLink to="/discover">
                        <Text :size="18">
                            Discover
                        </Text>
                    </NavLink>
                    <Spacer :margin-right="20" />
                    <NotLoggedIn>
                        <Flex>
                            <NavLink to="/login">
                                <Text :size="18">
                                    Login
                                </Text>
                            </NavLink>
                            <Spacer :margin-right="20" />
                            <NavLink to="/register">
                                <Text :size="18">
                                    Register
                                </Text>
                            </NavLink>
                        </Flex>
                    </NotLoggedIn>
                </Flex>
            </Flex>
        </Container>
    </nav>
</template>

<script>
import Box from '@/layouts/Box'
import Flex from '@/layouts/Flex'
import Container from '@/layouts/Container'
import Spacer from '@/layouts/Spacer'
import LoggedInOnly from '@/layouts/LoggedInOnly'
import NotLoggedIn from '@/layouts/NotLoggedIn'

import NavLink from '@/components/NavLink'
import Image from '@/components/Image'
import Text from '@/components/Text'

export default {
    data() {
        return {
            image: 'logo.png'
        }
    },
    computed: {
        showNavbar() {
            return this.$route.meta.showNavbar
        }
    },
    components: {
        Box,
        Flex,
        Container,
        Spacer,
        LoggedInOnly,
        NotLoggedIn,
        NavLink,
        Image,
        Text
    }
}
</script>

<style scoped>
    .nav {
        width: 100%;
        height: 60px;
        box-sizing: border-box;
    }
</style>
