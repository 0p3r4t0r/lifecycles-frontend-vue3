import { createWebHistory, createRouter } from 'vue-router';
import Exercises from '@/components/fitness/pages/Exercises/Exercises.vue';
import Sets from '@/components/fitness/pages/Sets/Sets.vue';
import Home from '@/components/base/pages/Home.vue';
import About from '@/components/base/pages/About.vue';
import Labratory from '@/components/base/pages/Labratory.vue';

export const navbarRoutes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/about",
        name: "about",
        component: About,
    },
    {
        path: "/fitness/exercises",
        name: "exercises",
        component: Exercises,
    },
    {
        path: "/fitness/sets",
        name: "sets",
        component: Sets,
    },
    {
        path: "/laboratory",
        name: "laboratory",
        component: Labratory, 
    },
]

const routes = [
    ...navbarRoutes
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;