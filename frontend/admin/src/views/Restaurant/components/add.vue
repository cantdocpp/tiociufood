<template>
    <Modal 
        header-text="add restaurant"
        v-bind="$attrs"
    >
        <Form @submit="submit">
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
                <Label name="restaurant description">
                    <TextField
                        v-model="form.restaurantDescription"
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
                restaurantDescription: '',
                restaurantImageName: '',
                restaurantImage: []
            }
        }
    },
    methods: {
        handleUpload(event) {
            const file = event.target.files[0]
            console.log(file)

            const reader = new FileReader();
            reader.onload = e => {
                const url = e.target.result;
                
                this.form.restaurantImage = url
                this.form.restaurantImageName = file.name
            }

            reader.readAsDataURL(file)
            this.form.restaurantImage = [...event.target.files]
        },
        async submit() {
            const restaurantImageSplit = this.form.restaurantImage.split(';')
            this.form.restaurantImage = restaurantImageSplit[1]
            await add_restaurant(this.form)
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
