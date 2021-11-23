<template>
    <div class="login">
        <div class="login__card">
            <Text weight="bold" :size="30" centered>
                Sign In to Your Account
            </Text>
            <Spacer :margin-top="40" />
            <Stack space="medium">
                <Text :size="25" v-if="authError">
                    Email/Password is wrong
                </Text>
                <Label name="Enter your email">
                    <Input 
                        placeholder="example@mail.com"
                        :value="form.email"
                        v-model="form.email"
                        :error="error.email"
                    />
                </Label>
                <Label name="Enter Your Password">
                    <Input 
                        type="password" 
                        placeholder="Your Password"
                        :value="form.password"
                        v-model="form.password"
                        :error="error.password"
                    />
                </Label>
                <Button max-width @click="submit">
                    Sign In
                </Button>
            </Stack>
        </div>
    </div>
</template>

<script>
import Text from '@/components/Text'
import Label from '@/components/Label'
import Input from '@/components/Input'
import Button from '@/components/Button'
import Loading from '@/components/Loading'

import Spacer from '@/layouts/Spacer'
import Stack from '@/layouts/Stack'

const errorObj = {
    email: false,
    password: false
}

const formObj = {
    email: '',
    password: ''
}

export default {
    data() {
        return {
            form: {
                email: '',
                password: ''
            },
            error: {
                ...errorObj
            },
            authError: false
        }
    },
    methods: {
        checkForm() {
            if (!this.form.email) {
                this.error.email = true
            }

            if (!this.form.password) {
                this.error.password = true
            }

            return this.error.email || this.error.password
        },
        async submit() {
            this.error = {
                ...errorObj
            }
            const isError = this.checkForm()
            
            if (isError) return

            this.$store
                .dispatch('login', {
                    email: this.form.email,
                    password: this.form.password
                })
                .then(res => {
                    if (res.status === 401) {
                        this.authError = true
                        return
                    }
                    this.$router.push({ name: 'Home' }) 
                })
        }
    },
    components: {
        Text,
        Label,
        Input,
        Spacer,
        Stack,
        Button,
        Loading
    }
}
</script>

<style scoped>
    .login {
        margin-top: 100px;
    }

    .login__card {
        width: 400px;
        margin: 0 auto;
    }
</style>
