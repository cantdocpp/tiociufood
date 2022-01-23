<template>
    <div class="add-photos-modal">
        <Modal v-bind="$attrs">
            <Box>
                <Title :size="20">
                    Add Restaurant Photos
                </Title>
                <Spacer :margin-top="20" />
                <Box>
                    <div class="upload__wrapper">
                        <span class="upload__text">Browse image to upload</span>
                        <div class="upload__image__wrapper">
                            <section class="uploaded__box" v-for="(image, index) in uploadImage" :key="index">
                                <img :src="image" alt="upload logo" class="uploaded__image">
                                <span class="uploaded__image__x">x</span>
                            </section>
                            <section class="upload__box">
                                <img src="https://b.zmtcdn.com/webuikit/4256c1e7cbe4e3d51f54cbee6e6e6a6d1580794982.png" alt="upload logo" class="upload__logo">
                                <input type="file" name="myfile" accept="image/*" multiple class="upload__input">
                            </section>
                        </div>
                    </div>
                </Box>
                <Spacer :margin-top="20" />
                <Box>
                    <Flex justify="flex-end">
                        <Button @click="submit" :submit="isSubmit">
                            Submit
                        </Button>
                    </Flex>
                </Box>
            </Box>
        </Modal>
    </div>
</template>

<script>
import Modal from '@/components/Modal'
import Title from '@/components/Title'
import Button from '@/components/Button'

import Box from '@/layouts/Box'
import Spacer from '@/layouts/Spacer'
import Flex from '@/layouts/Flex'

export default {
    components: {
        Modal,
        Title,
        Button,
        Box,
        Spacer,
        Flex
    }
}
</script>

<style scoped>
    .upload__wrapper {
        text-align: center;
    }

    .upload__text {
        text-align: center;
        display: inherit;
        font-size: 20px;
        color: rgb(156, 156, 156);
        margin-bottom: 20px;
    }

    .upload__box {
        position: relative;
        cursor: pointer;
        display: inline-block;
        border: 1px dashed rgb(206, 206, 206);
        border-radius: 4px;
        margin-left: 10px;
        width: 25%;
        height: 110px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 10px;
    }

    .upload__box--center {
        margin: 0 auto;
    }

    .upload__logo {
        box-sizing: border-box;
    }

    .upload__input {
        width: 100%;
        cursor: pointer;
        font-size: 1rem;
        position: absolute;
        left: 0px;
        top: 0px;
        opacity: 0;
        height: 10rem;
        margin: 1rem 0px 2rem;
    }

    .upload__uploaded {
        display: flex;
    }

    .upload__image__wrapper {
        display: flex;
        flex-wrap: wrap;
    }
</style>
