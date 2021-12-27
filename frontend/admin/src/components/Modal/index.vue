<template>
    <div class="modal">
        <div class="modal__inner">
            <Box>
                <Flex justify="space-between">
                    <Header :level="2">
                        {{ headerText }}
                    </Header>
                    <Close @close="$emit('close')" />
                </Flex>
                <Box>
                    <slot></slot>
                </Box>
            </Box>
        </div>
    </div>
</template>

<script>
import Box from '@/components/Box'
import Flex from '@/components/Flex'
import Header from '@/components/Header'
import Close from '@/components/Close'
import Spacer from '@/components/Spacer'

export default {
    props: {
        headerText: {
            type: String,
            required: true
        }
    },
    components: {
        Box,
        Flex,
        Header,
        Close,
        Spacer
    }
}
</script>


<style scoped>
    .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 13;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        overflow: scroll;
        background-color: rgba(0,0,0,.8);
        color: #000;
    }

    .modal__inner {
        box-sizing: border-box;
        padding: 15px;
        width: 600px;
        position: relative;
        background-color: #fff;
        box-shadow: 0 3px 5px rgb(0 0 0 / 30%);
        border-radius: 4px;
        padding-bottom: 32px;
        margin: auto;
        color: #000;
    }
</style>
