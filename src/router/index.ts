import { createWebHistory, createRouter } from 'vue-router';
import Exercises from '@/components/fitness/pages/Exercises.vue';
import Home from '@/components/base/pages/Home.vue';
import About from '@/components/base/pages/About.vue';

const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/about",
        component: About,
    },
    {
        path: "/fitness/exercises",
        component: Exercises,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;