<script setup>
import Warning from '@/icons/Warning.vue';


</script>

<template>
    <section class="flex flex-col items-center justify-center h-96">
        <Warning />
        <h1 class="mb-4 text-6xl font-bold">404 Not Found</h1>
        <p class="mb-5 text-xl">This page doesnt exist</p>
        <RouterLink to="/" class="px-3 py-2 mt-4 text-white bg-yellow-400 rounded-md hover:bg-yellow-400">Go back
        </RouterLink>
    </section>
</template>