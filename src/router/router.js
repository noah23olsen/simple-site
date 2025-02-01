import { createRouter, createWebHistory } from 'vue-router';
import MusicVue from '@/components/MusicVue.vue';
import Home from '@/components/HomeVue.vue';
import ReadingsVue from '@/components/ReadingsVue.vue';


const routes = [
    {
        path: '/',
        component: Home,
        meta: { title: 'about'}
    },
    {
        path: '/music',
        name: 'MusicVue',
        component: MusicVue,
        meta: { title: 'melodies i enjoy'}

    },
    {
        path: '/readings',
        name: 'ReadingsVue',
        component: ReadingsVue,
        meta: { title: 'literary favorites'}
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
