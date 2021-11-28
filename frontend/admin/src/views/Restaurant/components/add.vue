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
                        type="number"
                        v-model="form.restaurantSchedule"
                    />
                </Label>
                <Label name="restaurant image">
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

import { add_restaurant } from '@/api/restaurant'

export default {
    data() {
        return {
            form: {
                restaurantName: '',
                restaurantAddress: '',
                restaurantImage: [],
                restaurantAvgCost: '',
                restaurantSchedule: ''
            }
        }
    },
    methods: {
        handleUpload(event) {
            this.form.restaurantImage = event.target.files[0]
        },
        async submit() {
            const formData = new FormData()
            formData.append('file', this.form.restaurantImage)
            formData.append('restaurantAddress', this.form.restaurantAddress)
            formData.append('restaurantName', this.form.restaurantName)
            formData.append('restaurantAvgCost', this.form.restaurantAvgCost)
            formData.append('restaurantSchedule', this.form.restaurantSchedule)
            try {
                const res = await add_restaurant(formData)
                this.$emit('add', res.data)
            } catch(err) {
                console.log(err)
            }
        }
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
        Button
    }
}
</script>
