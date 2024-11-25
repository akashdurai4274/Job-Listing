<script setup>
import { defineProps } from 'vue';
defineProps({
    title: {
        type: String,
        default: "Became a Vue Dev"
    },
    subtitle: {
        type: String,
        default: "FIn the Vue jobs that fits your skills and needs"
    }
})
</script>
<template>
    <section>
        <div class="flex flex-col items-center justify-center py-20 bg-yellow-400">
        <span class="text-4xl font-bold text-white">{{ title }}</span>
        <p class="text-xl text-white">{{ subtitle }}</p>
    </div>
    </section>
</template>