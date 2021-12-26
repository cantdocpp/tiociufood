<template>
    <nav class="nav" v-if="showNavbar">
        <Container>
            <Flex justify="space-between" align="center">
                <NavLink to="/">
                    <Text :size="40" weight="bold">
                        Tiociufood
                    </Text>
                </NavLink>
                <Flex align="center">
                    <NavLink to="/discover">
                        <Text :size="22">
                            Discover
                        </Text>
                    </NavLink>
                    <Spacer :margin-left="20" />
                    <NavLink to="/about-us">
                        <Text :size="22">
                            About Us
                        </Text>
                    </NavLink>
                    <Spacer :margin-left="20" />
                    <LoggedInOnly>
                        <Flex>
                            <NavLink to="/recommendation">
                                <Text :size="22">
                                    Recommendation
                                </Text>
                            </NavLink>
                            <Spacer :margin-left="20" />
                            <span class="nav__logout" @click="logout">Log Out</span>
                        </Flex>
                    </LoggedInOnly>
                    <!-- <Spacer :margin-right="20" /> -->
                    <NotLoggedIn>
                        <Flex>
                            <NavLink to="/login">
                                <Text :size="22">
                                    Login
                                </Text>
                            </NavLink>
                            <Spacer :margin-left="20" />
                            <NavLink to="/register">
                                <Text :size="22">
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
    methods: {
        logout() {
            localStorage.removeItem('access_token')
            this.$store.dispatch('logout')
            this.$router.push({
                name: 'Login'
            })
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

    .nav__logout {
        font-size: 22px;
        cursor: pointer;
        user-select: none;
    }
</style>
