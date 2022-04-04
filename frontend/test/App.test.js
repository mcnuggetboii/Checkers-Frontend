/**
 * @vitest-enviroment happy-dom
 */

import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '../src/App.vue'
import HelloWorld from '../src/components/HelloWorld.vue'

describe('App Test', () => {
    it('should render', () => {
        const wrapper = mount(App)
    })
})

describe('HelloWorld Component Test', ()=> {
    it('should mount', () => {
        const wrapper = mount(HelloWorld, {
            props: {
                msg: "Hello from Luca"
            },
        })

        expect(wrapper.find('h3').exists()).toBeTruthy()
    })
})