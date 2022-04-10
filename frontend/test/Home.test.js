/**
 * @vitest-enviroment
 */

import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Home from '../src/views/Home.vue'
import HelloWorld from '../src/components/HelloWorld.vue'

describe('Home mount test', ()=> {
    it('should mount', () => {
        const wrapper = mount(Home)

        expect(wrapper.find('img').exists()).toBeTruthy()
        expect(wrapper.findComponent(HelloWorld).exists()).toBeTruthy()
    })
})

describe('HelloWorld Component Test', ()=> {
    it('should mount', () => {
        const wrapper = mount(HelloWorld, {
            props: {
                msg: "Hello from Luca"
            },
        })
        
        expect(wrapper.text()).toContain('Hello from Luca')
        expect(wrapper.find('h3').exists()).toBeTruthy()
    })
})