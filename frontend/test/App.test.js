/**
 * @vitest-enviroment
 */

import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from "vue-router"
import App from '../src/App.vue'
import SideBar from '../src/components/sideBarComponents/SideBar.vue'
import HomeView from "../src/views/Home.vue";
import Error404 from "../src/views/ErrorView.vue";

describe('App Test', () => {
    it('should render child SibeBar', async () => {
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
        router.push("/home")
        await router.isReady()
        const wrapper = mount(App, {
            global: {
                plugins: [router]
            }
        })
        
        expect(wrapper.findComponent(SideBar).exists()).toBe(true)
    })
})
