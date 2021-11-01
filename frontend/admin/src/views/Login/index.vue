<template>
  <div>
    <form @submit.prevent="login" class="form">
      <h1 class="form__title">Tiociufood admin login</h1>
      <span v-if="error" class="form__error">username or password wrong</span>
      <label for="email" class="form__label">
        Email:
      </label>
      <input v-model="email" type="email" name="email" class="form__input" required>

      <label for="password" class="form__label form__label__last">
        Password:
      </label>
      <input v-model="password" type="password" name="password" class="form__input" required>

      <button type="submit" name="button" class="form__button">
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

<style scoped>
  .form {
    width: 300px;
    margin: 0 auto;
    margin-top: 200px;
  }
  
  .form__title {
    font-size: 24px;
    text-transform: capitalize;
    text-align: center;
  }

  .form__label {
    display: block;
    font-size: 16px;
  }

  .form__label__last {
    margin-top: 10px;
  }

  .form__input {
    box-sizing: border-box;
    margin-top: 10px;
    width: 100%;
    padding: 5px;
  }

  .form__button {
    margin-top: 20px;
    width: 100%;
    background: #000;
    color: #fff;
    padding: 7px 0;
    border: none;
    border-radius: 2px;
  }

  .form__error {
    color: red;
    font-size: 16px;
  }
</style>
