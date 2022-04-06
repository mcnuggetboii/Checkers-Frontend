/**
 * @vitest-enviroment
 */

import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '../src/App.vue'

describe('App Test', () => {
    it('should render', () => {
        const wrapper = mount(App)
    })
})
