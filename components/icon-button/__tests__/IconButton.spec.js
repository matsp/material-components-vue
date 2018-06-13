import 'mutationobserver-shim'
import { mount } from '@vue/test-utils'
import IconButton from '../IconButton.vue'

describe('IconButton', () => {
  it('should mount', () => {
    let wrapper = mount(IconButton)
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.vm.$data.slotObserver).toBeDefined()
  })

  it('should render with no prop', () => {
    let wrapper = mount(IconButton)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-icon-button')
  })
})
