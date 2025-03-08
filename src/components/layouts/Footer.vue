<script setup>
import { useData } from '../../store';

const dataStore = useData();
</script>

<template>
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <svg class="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M5.35709 16V5.78571c0-.43393.34822-.78571.77777-.78571H18.5793c.4296 0 .7778.35178.7778.78571V16M5.35709 16h-1c-.55229 0-1 .4477-1 1v1c0 .5523.44771 1 1 1H20.3571c.5523 0 1-.4477 1-1v-1c0-.5523-.4477-1-1-1h-1M5.35709 16H19.3571M9.35709 8l2.62501 2.5L9.35709 13m4.00001 0h2" />
                </svg>
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{{ dataStore.authorName() }}</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <router-link :to="{ name: 'about' }" class="hover:underline me-4 md:me-6">About</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'experience' }" class="hover:underline me-4 md:me-6">Experience</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'skill' }" class="hover:underline me-4 md:me-6">Skill</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'contact' }" class="hover:underline">Contact</router-link>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© {{ new Date().getFullYear() }} <router-link
            :to="{ name: 'about' }" class="hover:underline">{{ dataStore.authorName() }}</router-link>. Built with Flowbite & Vue.</span>
    </div>
</template>