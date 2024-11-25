<script setup>
import BackArrow from '@/icons/BackArrow.vue';


</script>

<template>
    <section>
        <div class="container p-6 m-auto">
            <RouterLink to="/jobs" class="flex items-center text-yellow-400 hover:text-yellow-500">
                <div class="flex space-x-3">
                    <BackArrow />
                    <span class="text-xl">Go Back TO Job Listing</span>
                </div>
            </RouterLink>
        </div>
    </section>
</template>