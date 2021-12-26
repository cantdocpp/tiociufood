<template>
    <Modal 
        header-text="add restaurant"
        v-bind="$attrs"
    >
        <Form @submit.prevent="submit">
            <Stack>
                <Label name="restaurant name">
                    <Input
                        placeholder="restaurant name"
                        v-model="form.restaurantName"
                    />
                </Label>
                <Label name="restaurant address">
                    <Input
                        placeholder="restaurant address"
                        v-model="form.restaurantAddress"
                    />
                </Label>
                <Label name="restaurant average cost">
                    <Input
                        placeholder="restaurant average cost"
                        type="number"
                        v-model="form.restaurantAvgCost"
                    />
                </Label>
                <Label name="restaurant schedule">
                    <Input
                        placeholder="restaurant schedule"
                        v-model="form.restaurantSchedule"
                    />
                </Label>
                <Box>
                    <p>
                        Food List
                    </p>
                    <div class="grid" v-if="foods">
                        <div class="grid__child" v-for="(food, index) in foods" :key="index">
                            <input type="checkbox" :name="food.foodName" :value="food.foodName" v-model="form.restaurantFood">
                            <label :for="food.foodName"> {{ food.foodName }} </label>
                        </div>
                    </div>
                    <div v-else>
                        loading...
                    </div>
                </Box>
                <Label name="restaurant image">
                    <FileInput @change="handleUpload" />
                </Label>
                <Label name="restaurant menu">
                    <input 
                        type="file" 
                        class="input" 
                        accept="image/png, image/jpeg"
                        multiple="multiple"
                        @change="handleMenuUpload($event.target.files)"
                    >
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

import { add_restaurant } from '@/api/restaurant'
import { upload_images } from '@/api/uploader'
import { get_food } from '@/api/food'

export default {
    data() {
        return {
            form: {
                restaurantName: '',
                restaurantAddress: '',
                restaurantImage: [],
                restaurantAvgCost: '',
                restaurantSchedule: '',
                restaurantFood: [],
                restaurantMenu: []
            },
            foods: []
        }
    },
    methods: {
        handleUpload(event) {
            this.form.restaurantImage = event.target.files[0]
        },
        handleMenuUpload(files) {
            this.form.restaurantMenu = files
        },
        async uploadMenu() {
            const formData = new FormData()
            for (let i = 0; i < this.form.restaurantMenu.length; i++) {
                formData.append('files', this.form.restaurantMenu[i])
            }
            
            try {
                const res = await upload_images(formData)
                const images = res.data.images

                return images
            } catch(err) {
                console.log(err)
            }
        },
        async submit() {
            const menus = await this.uploadMenu()
            const formData = new FormData()
            formData.append('file', this.form.restaurantImage)
            formData.append('restaurantAddress', this.form.restaurantAddress)
            formData.append('restaurantName', this.form.restaurantName)
            formData.append('restaurantAvgCost', this.form.restaurantAvgCost)
            formData.append('restaurantSchedule', this.form.restaurantSchedule)
            formData.append('restaurantFood', this.form.restaurantFood)
            formData.append('restaurantMenu', menus)

            try {
                const res = await add_restaurant(formData)
                this.$emit('add', res.data)
            } catch(err) {
                console.log(err)
            }
        }
    },
    async created() {
        const foods = await get_food()
        this.foods = foods
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
        Box
    }
}
</script>

<style scoped>
    .grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }
</style>
