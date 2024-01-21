import { createRouter, createWebHistory } from 'vue-router';
import MusicVue from '@/components/MusicVue.vue';
import Home from '@/components/HomeVue.vue';
import ReadingsVue from '@/components/ReadingsVue.vue';


const routes = [
    { path: '/', component: Home },
    { path: '/music', name: 'MusicVue', component: MusicVue },
    { path: '/readings', name: 'ReadingsVue', component: ReadingsVue },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
