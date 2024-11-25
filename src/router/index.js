import HomeView from '@/view/HomeView.vue';
import JobsView from '@/view/JobsView.vue';
import NotFoundeView from '@/view/NotFoundeView.vue';
import JobView from "@/view/JobView.vue"
import { createRouter, createWebHistory } from 'vue-router';
import AddJobView from '@/view/AddJobView.vue';
import EditView from '@/view/EditView.vue';


const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/jobs',
        name: 'jobs',
        component: JobsView
    },
    {
        path: '/jobs/:id',
        name: 'job',
        component: JobView
    },
    {
        path: '/jobs/add',
        name: 'add-job',
        component: AddJobView
    },
    {
        path: '/jobs/edit/:id',
        name: 'edit-job',
        component: EditView
    },
    {
        path: '/:catchall(.*)',
        name: 'add-jobs',
        component: NotFoundeView
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;