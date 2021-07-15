import { createWebHistory, createRouter } from 'vue-router';
import Exercises from '@/components/fitness/pages/exercises/exercises.vue';
import Sets from '@/components/fitness/pages/sets/sets.vue';
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
        path: "/fitness/sets",
        component: Sets,
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