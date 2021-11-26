<template>
    <div class="restaurant-detail">
        <ReviewModal />
        <Container>
            <Box>
                <Stack>
                    <Title :size="35">
                        Tio Ciu 78
                    </Title>
                    <Box>
                        <Text :size="18">
                            Mangga Besar, jakarta
                        </Text>
                    </Box>
                    <Box>
                        <Text>
                            10.00 - 23.00 (Today)
                        </Text>
                    </Box>
                    <Spacer :margin-top="10" />
                    <Box>
                        <Button @click="openModal">
                            Add Review
                        </Button>
                    </Box>
                </Stack>
            </Box>
        </Container>
    </div>
</template>

<script>
import ReviewModal from './components/ReviewModal'

import Title from '@/components/Title'
import Text from '@/components/Text'
import Button from '@/components/Button'
import Modal from '@/components/Modal'

import Container from '@/layouts/Container'
import Spacer from '@/layouts/Spacer'
import Box from '@/layouts/Box'
import Stack from '@/layouts/Stack'

export default {
    methods: {
        openModal() {
            console.log('tes')
        }
    },
    components: {
        ReviewModal,
        Title,
        Text,
        Button,
        Modal,
        Container,
        Spacer,
        Box,
        Stack
    }
}
</script>
