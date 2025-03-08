<script setup>
import { useDark } from '@vueuse/core';

const isDark = useDark();
</script>

<template>
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <img v-if="isDark" class="h-auto" src="../assets/images/empty-state-dark.png" alt="404 Not Found">
            <img v-else class="h-auto" src="../assets/images/empty-state.png" alt="404 Not Found">
        </div>
    </div>
</template>