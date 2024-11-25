<script setup>
import Location from '@/icons/Location.vue';
import { defineProps, ref, computed } from 'vue';
const props = defineProps({
    job: Object,

});

const showFullDescription = ref(false);

const toggleFullDescription = () => {
    showFullDescription.value = !showFullDescription.value;
}

const truncatedDescription = computed(() => {
    let description = props.job.description;
    if (!showFullDescription.value) {
        description = description.substring(0, 90) + "...";
    }
    return description;
})
</script>

<template>
    <div class="bg-white rounded-xl shandow-md">
        <div class="p-4">
            <div class="mb-6">
                <div class="my-2 text-gray-600">{{ job.type }}</div>
                <div class="text-xl font-bold ">{{ job.title }}</div>
            </div>
            <div class="mb-5">
                <div>
                    {{ truncatedDescription }}
                    <button @click="toggleFullDescription" class="mb-5 text-yellow-500 hover:text-yellow-600">{{
                        showFullDescription ? "less" : "more" }}</button>
                </div>
            </div>
            <h3 class="mb-2 text-yellow-500">
                {{ job.salary }}
            </h3>
            <hr class="mb-5">
            <div class="flex flex-col justify-between lg:flex-row">
                <div class="flex items-center mb-3 text-orange-700">
                    <Location/>
                    <span class="ml-2 font-semi-bold"> {{ job.location }}</span>
                </div>
                
                <RouterLink :to="`/jobs/${job.id}`"
                    class="px-4 py-2 text-sm text-center text-white bg-yellow-400 rounded-lg hover:bg-yellow-600">Read
                    More</RouterLink>
            </div>
        </div>
    </div>
</template>