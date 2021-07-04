import { createWebHistory, createRouter } from 'vue-router';
import Exercises from '@/components/fitness/pages/exercises/exercises.vue';
import Home from '@/components/base/pages/Home.vue';
import About from '@/components/base/pages/About.vue';
import Labratory from '@/components/base/pages/Labratory.vue';

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
    {
        path: "/laboratory",
        component: Labratory, 
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;