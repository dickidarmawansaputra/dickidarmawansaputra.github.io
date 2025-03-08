<script setup>
import { useDark } from '@vueuse/core';
import { ref, watchEffect } from 'vue';

const skills = ref([]);

watchEffect(() => {
    fetch("/api/skills.json")
        .then(response => response.json())
        .then(data => skills.value = data);
});

const isDark = useDark();

function getImageUrl(fileName) {
    return new URL(`../assets/images/skills/${fileName}`, import.meta.url);
}

function getResume() {
    return new URL(`../assets/documents/resume.pdf`, import.meta.url);
}
</script>

<template>
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
                <img class="inline-flex items-center text-center" src="../assets/images/docs.png" alt="Skill"
                    width="400">
            </div>
            <div>
                <h1
                    class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-left">
                    Tech Stack and Tools.</h1>
                <p class="mb-3 text-gray-500 dark:text-gray-400 text-justify">Here are some of the technology stacks and
                    tools I use.</p>

                <blockquote
                    class="p-4 my-4 border-s-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800 text-justify">
                    <p class="text-md italic font-medium leading-relaxed text-gray-900 dark:text-white">Currently I am
                        also taking Go-Lang and Vue JS courses to improve my skills. You can check to my Github Go Clean
                        Architecture & Learn Vue repository.</p>
                </blockquote>

                <div class="inline-flex rounded-md shadow-xs" role="group">
                    <a href="https://github.com/dickidarmawansaputra/go-clean-architecture" target="_blank"
                        class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                        <img v-if="isDark" src="../assets/images/go-light.svg" class="w-8 h-auto" alt="Go Fiber">
                        <img v-else src="../assets/images/go-dark.svg" class="w-8 h-auto" alt="Go Fiber">
                        Fiber
                    </a>
                    <a href="https://github.com/dickidarmawansaputra/learn-vue" target="_blank"
                        class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                            viewBox="0 0 24 24">
                            <path
                                d="M14.5 3 12 7.156 9.857 3H2l10 18L22 3h-7.5ZM4.486 4.5h2.4L12 13.8l5.107-9.3h2.4L12 18.021 4.486 4.5Z" />
                        </svg>
                        Vue.js
                    </a>
                    <a :href="getResume()" target="_blank"
                        class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                        <svg class="w-6 h-6 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                            height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778" />
                        </svg>
                        Resume
                    </a>
                </div>
            </div>
        </div>
        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">


        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div v-for="skill in skills" :key="skill.id">
                <a v-bind:href="skill.url" target="_blank">
                    <img class="h-auto max-w-full rounded-lg transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
                        v-bind:src="getImageUrl(skill.image)" v-bind:alt="skill.name">
                </a>
            </div>
        </div>
    </div>
</template>