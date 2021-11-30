<template>
    <div class="register">
        <div class="register__card">
            <Text weight="bold" :size="30" centered>
                Create an Account
            </Text>
            <Spacer :margin-top="40" />
            <Stack space="medium">
                <Text :size="25" v-if="success">
                    Success Add User
                </Text>
                <Label name="Enter your username">
                    <Input 
                        placeholder="your username"
                        :value="form.username"
                        v-model="form.username"
                        :error="error.username"
                    />
                </Label>
                <Label name="Enter your email">
                    <Input 
                        placeholder="example@mail.com"
                        :value="form.email"
                        v-model="form.email"
                        :error="error.email"
                    />
                </Label>
                <Label name="Set Your Password">
                    <Input 
                        type="password" 
                        placeholder="Your Password"
                        :value="form.password"
                        v-model="form.password"
                        :error="error.password"
                    />
                </Label>
                <Button max-width @click="submit">
                    Sign Up
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

import Spacer from '@/layouts/Spacer'
import Stack from '@/layouts/Stack'

import { register_user } from '@/api/user'

const errorObj = {
    email: false,
    password: false,
    username: false
}

const formObj = {
    email: '',
    password: '',
    username: ''
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
            success: false
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

            if (!this.form.username) {
                this.error.username = true
            }

            return this.error.email || this.error.password || this.error.username
        },
        async submit() {
            this.error = {
                ...errorObj
            }
            const isError = this.checkForm()
            
            if (isError) return

            await register_user(this.form)

            this.success = true

            this.form = {
                ...formObj
            }
        }
    },
    components: {
        Text,
        Label,
        Input,
        Spacer,
        Stack,
        Button
    }
}
</script>


<style scoped>
    .register {
        margin-top: 100px;
    }

    .register__card {
        width: 400px;
        margin: 0 auto;
    }
</style>
