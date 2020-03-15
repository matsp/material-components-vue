import 'mutationobserver-shim'
import { mount } from '@vue/test-utils'
import IconButton from '../IconButton.vue'

describe('IconButton', () => {
  it('should mount', () => {
    const wrapper = mount(IconButton)
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.vm.$data.slotObserver).toBeDefined()
  })

  it('should render with no prop', () => {
    const wrapper = mount(IconButton)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-icon-button')
  })
})
