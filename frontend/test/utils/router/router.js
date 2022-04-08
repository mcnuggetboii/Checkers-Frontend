import { createRouter, createMemoryHistory } from "vue-router";
import HomeView from "../../../src/views/Home.vue";
import Error404 from "../../../src/views/ErrorView.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/about",
        name: "about",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () {
        return import(/* webpackChunkName: "about" */ "../src/views/AboutView.vue");
        },
    },
    {
        path: "/404",
        name: "error404",
        component: Error404,
    },
];

const router = createRouter({ 
    history: createMemoryHistory(),
    routes 
})

export default router