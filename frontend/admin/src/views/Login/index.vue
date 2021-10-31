<template>
    <div>
        <span v-if="error">username or password wrong</span>
        <form @submit.prevent="login">
          <label for="email">
            Email:
          </label>
          <input v-model="email" type="email" name="email" value>

          <label for="password">
            Password:
          </label>
          <input v-model="password" type="password" name="password" value>

          <button type="submit" name="button">
            Login
          </button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            error: false
        }
    },
    methods: {
        login () {
          this.$store
            .dispatch('login', {
              email: this.email,
              password: this.password
            })
            .then(res => {
              console.log(res, '++++++++++++++++++')
              if (res.status === 401) {
                this.error = true
                return
              }
              this.$router.push({ name: 'Home' }) 
            })
        }
    },
}
</script>
