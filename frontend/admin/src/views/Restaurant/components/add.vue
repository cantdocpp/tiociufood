<template>
    <Modal 
        header-text="add restaurant"
        v-bind="$attrs"
    >
        <Form>
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

export default {
    data() {
        return {
            form: {
                restaurantName: '',
                restaurantAddress: '',
                restaurantDescription: '',
                restaurantImage: []
            }
        }
    },
    methods: {
        handleUpload(event) {
            console.log(...event.target.files)
            this.form.restaurantImage = [...event.target.files]
            
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
