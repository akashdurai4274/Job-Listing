<script setup>
import { defineProps, onMounted, reactive } from "vue";
import JobListing from "./JobListing.vue";
import axios from "axios";
import PulseLoader from "vue-spinner/src/DotLoader.vue"
import api from "@/api";
defineProps({
    limit: {
        type: Number
    },
    showButton: {
        type: Boolean,
        default: false,
    }
});

const state = reactive({
    jobs: [],
    isLoading:true, 
})

onMounted(async () => {
    try {
        const response = await api.get('/');
        state.jobs = await response.data;
    } catch (error) {
        console.log(error);
    } finally {
        state.isLoading = false;
    }
})
</script>

<template>
    <section class="px-4 py-10 bg-blue-50">
        <div class="m-auto continer-xl lg:container">
            <h2 class="mb-6 text-3xl font-bold text-center text-yellow-400">
                Browse Jobs
            </h2>
            <!-- Show loading Spinner -->
             <div v-if="state.isLoading" class="flex justify-center py-6 text-center text-gray-500">
                <PulseLoader/>
             </div>
            <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
                <JobListing v-for="job in state.jobs.slice(0, limit || state.jobs.length)" :key="job.id" :job="job" />
            </div>
            <section v-if="showButton" class="max-w-lg px-6 m-auto my-10">
                <RouterLink to="/jobs/"
                    class="block px-6 py-3 text-center text-white bg-black rounded-xl hover:bg-gray-700">View All Jobs
                </RouterLink>
            </section>
        </div>
    </section>
</template>