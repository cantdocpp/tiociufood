<template>
    <div class="not-logged-in" v-if="!loggedIn">
        <slot></slot>
    </div>
</template>

<script>
import { authComputed } from '@/utils/auth'

export default {
    computed: {
        ...authComputed
    }
}
</script>
