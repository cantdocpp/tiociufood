<template>
    <div class="home" :style="{ backgroundImage: 'url(' + require('@/assets/home.jpg') + ')' }">>
        <div class="home__shadow"></div>
        <div class="home__content">
            <h1 class="home__user__welcome" v-if="userLoggedIn">Welcome, {{ getUsername }}</h1>
            <h1 class="home__title">Search for restaurant near you <br> (*non-halal)</h1>
            <div class="home__input__box">
                <div class="home__input__wrapper">
                    <input type="text" placeholder="restaurant name" class="home__input" v-model="userSearch">
                </div>
                <button class="home__button" @click="search">Search</button>
            </div>
            <div class="home__footer">
                <span class="home__footer__text">Or you can discover more restaurant <router-link to="/discover" class="home__link">here</router-link> </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userSearch: ''
        }
    },
    computed: {
        userLoggedIn() {
            const userisLoggedIn = this.$store.getters.loggedIn

            return userisLoggedIn
        },
        getUsername() {
            const userState = this.$store.getters.userStateData

            return userState.username
        }
    },
    methods: {
        search() {
            this.$router.push({ name: 'Search', query: { restaurant: this.userSearch } })
        }
    }
}
</script>


<style scoped>
    .home {
        position: relative;
        height: 100vh;
        width: 100%;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }

    .home__shadow {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.4);
    }

    .home__content {
        position: absolute;
        left: 30%;
        top: 30%;
        transform: translate(-50%, -50%);
        color: #fff;
    }

    .home__input__box {
        margin-top: 20px;
        display: flex;
    }

    .home__title {
        margin-top: 30px;
        font-size: 60px;
    }

    .home__input {
        box-sizing: border-box;
        width: 650px;
        outline: none;
        padding: 12px;
        border-radius: 5px;
        border: none;
    }

    .home__button {
        box-sizing: border-box;
        margin-left: 10px;
        background-color: rgb(239, 79, 95);
        color: #fff;
        border: none;
        outline: none;
        padding: 0 10px;
        border-radius: 5px;
        cursor: pointer;
    }

    .home__footer {
        margin-top: 20px;
    }

    .home__footer__text {
        font-size: 25px;
    }
    
    .home__link {
        font-size: 25px;
        color: rgb(239, 79, 95);
    }

    .home__user__welcome {
        font-size: 50px;
    }
</style>
