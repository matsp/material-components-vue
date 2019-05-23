import 'mutationobserver-shim'
import { mount } from '@vue/test-utils'
import FloatingLabel from '../FloatingLabel.vue'

describe('FloatingLabel', () => {
  it('should mount', () => {
    let wrapper = mount(FloatingLabel)
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.vm.$data.mdcFloatingLabel).toBeDefined()
  })

  it('should render with no prop', () => {
    let wrapper = mount(FloatingLabel)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-floating-label')
  })

  it('should render with floatAbove', () => {
    let wrapper = mount(FloatingLabel, {
      propsData: {
        floatAbove: true
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-floating-label--float-above')
  })

  it('should render with shake', () => {
    let wrapper = mount(FloatingLabel, {
      propsData: {
        shake: true
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-floating-label--shake')
  })
})
