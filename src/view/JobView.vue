<!-- Show Jobs By id -->
<script setup>
import api from '@/api';
import BackButtonComponent from '@/components/BackButtonComponent.vue';
import Location from '@/icons/Location.vue';
import { onMounted, reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useToast } from 'vue-toastification';

const router = useRouter();
const ErrorText = ref('');
const route = useRoute();
const toast = useToast()
const jobId = route.params.id;

const state = reactive({
    job: [],
    isLoading: true,
    isError: false,
});


onMounted(async () => {
    try {
        const response = await api.get(`/${jobId}`);
        state.job = response.data;
    } catch (error) {
        state.isError = true;
        ErrorText.value = error.message;
    } finally {
        state.isLoading = false;
    }
});

const deleteJob = async() => {
    try {
        const confirm = window.confirm("Are you Sure to Delete Job?");
        if (confirm) {
            await api.delete(`/${jobId}`);
            toast.success("Job Deleted Successfully")
            router.push('/');
        }
    } catch (error) {
        console.log(error);
        toast.error("Error While Deleting Job!");
    }
}
</script>

<template>
    <BackButton />
    <section v-if="!state.isLoading" class="bg-green-50">
        <BackButtonComponent/>
        <div class="container px-6 py-10 m-auto">
            <div class="grid w-full grid-cols-1 gap-6 md:grid-cols-[5fr_2fr]">
                <main>
                    <div class="p-6 text-center bg-white rounded-lg shadow-md md:text-left">
                        <div class="mb-4 text-gray-500">{{ state.job.type }}</div>
                        <h1 class="mb-4 text-3xl font-bold">{{ state.job.title }}</h1>
                        <div class="flex justify-center mb-4 text-gray-500 align-middle md:justify-start">
                            <Location/>
                            <p class="text-orange-700">{{ state.job.location }}</p>
                        </div>
                    </div>

                    <div class="p-6 mt-6 bg-white rounded-lg shadow-md">
                        <h3 class="mb-6 text-lg font-bold text-green-800">
                            Job Description
                        </h3>

                        <p class="mb-4">
                            {{ state.job.description }}
                        </p>

                        <h3 class="mb-2 text-lg font-bold text-green-800">Salary</h3>

                        <p class="mb-4">{{ state.job.salary }} / Year</p>
                    </div>
                </main>

                <!-- Sidebar -->
                <aside>
                    <!-- Company Info -->
                    <div class="p-6 bg-white rounded-lg shadow-md">
                        <h3 class="mb-6 text-xl font-bold">Company Info</h3>

                        <h2 class="text-2xl">{{ state.job.company.name }}</h2>

                        <p class="my-2">
                            {{ state.job.company.description }}
                        </p>

                        <hr class="my-4" />

                        <h3 class="text-xl">Contact Email:</h3>

                        <p class="p-2 my-2 font-bold bg-green-100">
                            {{ state.job.company.contactEmail }}
                        </p>

                        <h3 class="text-xl">Contact Phone:</h3>

                        <p class="p-2 my-2 font-bold bg-green-100">
                            {{ state.job.company.contactPhone }}
                        </p>
                    </div>

                    <!-- Manage -->
                    <div class="p-6 mt-6 bg-white rounded-lg shadow-md">
                        <h3 class="mb-6 text-xl font-bold">Manage Job</h3>
                        <RouterLink :to="`/jobs/edit/${state.job.id}`" 
                            class="block w-full px-4 py-2 mt-4 font-bold text-center text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:shadow-outline">
                            Edit Job</RouterLink>
                        <button @click="deleteJob"
                            class="block w-full px-4 py-2 mt-4 font-bold text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:shadow-outline">
                            Delete Job
                        </button>
                    </div>
                </aside>
            </div>
        </div>
    </section>
    <!-- Show loading Spinner -->
    <div v-else class="flex justify-center py-6 text-center text-gray-500">
        <PulseLoader />
    </div>
</template>