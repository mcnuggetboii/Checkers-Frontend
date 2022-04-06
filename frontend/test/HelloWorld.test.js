/**
 * @vitest-enviroment
 */

import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HelloWorld from '../src/components/HelloWorld.vue'

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