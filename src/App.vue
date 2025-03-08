<script setup>
import { RouterView } from 'vue-router';
import Navbar from './components/layouts/Navbar.vue'
import Footer from './components/layouts/Footer.vue'
</script>

<template>
  <section class="bg-white dark:bg-gray-900">
    <Navbar />
    <RouterView />
    <Footer />
  </section>
</template>

<style scoped></style>
