<script setup>
import { RouterView, useRoute } from 'vue-router';
import CookieBanner from './components/CookieBanner.vue';
import MainHeader from './fixtures/MainHeader.vue';
import MainFooter from './fixtures/MainFooter.vue';

const route = useRoute();
</script>

<template>
    <MainHeader v-if="route.name !== 'game'" />
    <CookieBanner />
    <RouterView />
    <MainFooter />
</template>

<style scoped></style>
