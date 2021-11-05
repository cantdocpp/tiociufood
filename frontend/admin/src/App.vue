<template>
  <div id="app">
    <Navbar v-if="loggedIn" />
    <router-view />
  </div>
</template>

<script>
import { authComputed } from './utils/helper'
import Navbar from './components/Navbar'

export default {
  components: {
    Navbar
  },
  computed: {
    ...authComputed
  }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&display=swap');

#app {
  font-family: 'Sora', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
  box-sizing: border-box;
}
</style>
