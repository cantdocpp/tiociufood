<template>
    <Modal 
        header-text="add food"
        v-bind="$attrs"
    >
        <Form @submit.prevent="submit">
            <Stack>
                <Label name="food name">
                    <Input
                        placeholder="food name"
                        v-model="form.foodName"
                    />
                </Label>
                <Label name="food price">
                    <Input
                        type="number"
                        placeholder="food price"
                        v-model="form.foodPrice"
                    />
                </Label>
                <Box v-if="restaurantList">
                    <Text>
                        Restaurant list
                    </Text>
                    <Label
                        v-for="(restaurant, index) in getRestauratList"
                        :key="index"
                    >
                        <input type="checkbox" :value="restaurant" v-model="form.foodRestaurant">
                        {{ restaurant }}
                    </Label>
                <Break />
                </Box>
                <Label name="food image">
                    <FileInput @change="handleUpload" />
                </Label>
                <Spacer :y="20" />
                <Box>
                    <Flex justify="flex-end">
                        <Button max-width>
                            Submit
                        </Button>
                    </Flex>
                </Box>
            </Stack>
        </Form>
    </Modal>
</template>

<script>
import Spacer from '@/components/Spacer'
import Flex from '@/components/Flex'
import Box from '@/components/Box'
import Modal from '@/components/Modal'
import Label from '@/components/Label'
import Form from '@/components/Form'
import Stack from '@/components/Stack'
import Input from '@/components/Input'
import TextField from '@/components/TextField'
import FileInput from '@/components/FileInput'
import Button from '@/components/Button'
import Checkbox from '@/components/Checkbox'
import Break from '@/components/Break'
import Text from '@/components/Text'

import { get_restaurant } from '@/api/restaurant'
import { add_food } from '@/api/food'

export default {
    data() {
        return {
            form: {
                foodName: '',
                foodPrice: '',
                foodImage: '',
                foodRestaurant: []
            },
            restaurantList: []
        }
    },
    computed: {
        getRestauratList() {
            return this.restaurantList.map(list => {
                return list.restaurantName
            })
        }
    },
    methods: {
        handleUpload(event) {
            this.form.foodImage = event.target.files[0]
        },
        async submit() {
            const formData = new FormData()
            formData.append('file', this.form.foodImage)
            formData.append('foodName', this.form.foodName)
            formData.append('foodPrice', this.form.foodPrice)
            formData.append('foodRestaurant', this.form.foodRestaurant)
            try {
                const res = await add_food(formData)
                console.log(res, 'res_________')
                this.$emit('add', res.data)
            } catch(err) {
                console.log(err)
            }
        }
    },
    async created() {
        const restaurantRes = await get_restaurant()
        this.restaurantList = restaurantRes
    },
    components: {
        Spacer,
        Modal,
        Label,
        Form,
        Stack,
        Input,
        TextField,
        FileInput,
        Box,
        Flex,
        Button,
        Checkbox,
        Break,
        Text
    }
}
</script>
