<script setup>
import { ref, watchEffect } from 'vue';

const experiences = ref([]);

watchEffect(() => {
    fetch("/api/experiences.json")
        .then(response => response.json())
        .then(data => experiences.value = data);
});

function getImageUrl(fileName) {
    return new URL(`../assets/images/experiences/${fileName}`, import.meta.url);
}
</script>

<template>
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
                <img class="h-auto" src="../assets/images/laptop.png" alt="Experience">
            </div>
            <div>
                <h1
                    class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-left">
                    Some companies where I've Worked.</h1>
                <p class="mb-3 text-gray-500 dark:text-gray-400 text-justify">Besides these are several companies
                    that I have worked with.</p>
                <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
                <ol class="relative ml-4 border-s border-gray-200 dark:border-gray-700 text-left"
                    v-for="experience in experiences" :key="experience.id">
                    <li class="mb-10 ms-6">
                        <span
                            class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <img v-bind:src="getImageUrl(experience.logo)" v-bind:alt="experience.company">
                        </span>
                        <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                            {{ experience.company }}
                            <template v-if="experience.isLatest">
                                <span
                                    class="text-white dark:text-gray-900 bg-gray-800 hover:bg-gray-900 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-white dark:hover:bg-white ms-3">Latest</span>
                            </template>
                        </h3>
                        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{{
                            experience.period }}</time>
                        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{{ experience.title }}
                        </p>
                    </li>
                </ol>
            </div>
        </div>
    </div>
</template>