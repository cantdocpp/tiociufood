<template>
    <div class="review-modal">
        <Modal title="Add Review">
            <Text>
                step: {{ step }}
            </Text>
            <Spacer :margin-top="20" />
            <Box v-if="step === 1">
                <Stack space="medium">
                    <Box>
                        <Title :size="20">
                            Rate this restaurant
                        </Title>
                        <Spacer :margin-top="10" />
                        <ReviewStar @review="restaurantReview" />
                    </Box>
                    <Box>
                        <Title :size="20">
                            Say something about this restaurant
                        </Title>
                        <Spacer :margin-top="10" />
                        <Textfield></Textfield>
                    </Box>
                    <Flex justify="flex-end">
                        <Button @click="next">
                            Next
                        </Button>
                    </Flex>
                </Stack>
            </Box>
            <Box v-if="step === 2">
                <Stack space="medium">
                    <Title :size="20">
                        What food did you buy ?
                    </Title>
                    <Grid template-columns="repeat(4, 1fr)" :row-gap="5" :column-gap="5">
                        <div class="checkbox__wrapper">
                            <input type="checkbox" name="" id="">
                            <label for="">sad</label>
                        </div>
                    </Grid>
                    <Flex justify="flex-end">
                        <Button type="secondary" @click="back">
                            Back
                        </Button>
                        <Spacer :margin-left="10" />
                        <Button @click="next">
                            Next
                        </Button>
                    </Flex>
                </Stack>
            </Box>
            <Box v-if="step === 3">
                <Stack space="medium">
                    <Box>
                        <Stack>
                            <Title :size="20">
                                Review makanan Fu yung Hai
                            </Title>
                            <ReviewStar />
                            <Textfield></Textfield>
                        </Stack>
                    </Box>
                    <Box>
                        <Stack>
                            <Title :size="20">
                                Review makanan Fu yung Hai
                            </Title>
                            <ReviewStar />
                            <Textfield></Textfield>
                        </Stack>
                    </Box>
                    <Flex justify="flex-end">
                        <Button type="secondary" @click="back">
                            Back
                        </Button>
                        <Spacer :margin-left="10" />
                        <Button @click="next">
                            Submit
                        </Button>
                    </Flex>
                </Stack>
            </Box>
        </Modal>
    </div>
</template>

<script>
import ReviewStar from './ReviewStar.vue'

import Modal from '@/components/Modal'
import Title from '@/components/Title'
import Text from '@/components/Text'
import Textfield from '@/components/Textfield'
import Button from '@/components/Button'

import Box from '@/layouts/Box'
import Spacer from '@/layouts/Spacer'
import Stack from '@/layouts/Stack'
import Flex from '@/layouts/Flex'
import Grid from '@/layouts/Grid'

export default {
    data() {
        return {
            step: 1
        }
    },
    methods: {
        restaurantReview(value) {
            console.log(value)
        },
        next() {
            this.step++
        },
        back() {
            this.step--
        }
    },
    components: {
        ReviewStar,
        Modal,
        Title,
        Text,
        Textfield,
        Button,
        Box,
        Spacer,
        Stack,
        Flex,
        Grid
    }
}
</script>
