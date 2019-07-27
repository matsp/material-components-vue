import 'mutationobserver-shim'
import { mount } from '@vue/test-utils'
import Button from '../Button.vue'

describe('Button', () => {
  it('should mount', () => {
    const wrapper = mount(Button)
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.vm.$data.mdcRipple).toBeDefined()
    expect(wrapper.vm.$data.slotObserver).toBeDefined()
  })

  it('should render with no prop', () => {
    const wrapper = mount(Button)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-button')
  })

  it('should render as raised', () => {
    const wrapper = mount(Button, {
      propsData: {
        raised: true
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-button--raised')
  })

  it('should render as unelevated', () => {
    const wrapper = mount(Button, {
      propsData: {
        unelevated: true
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-button--unelevated')
  })

  it('should render as outlined', () => {
    const wrapper = mount(Button, {
      propsData: {
        outlined: true
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-button--outlined')
  })

  it('should render as dense', () => {
    const wrapper = mount(Button, {
      propsData: {
        dense: true
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-button--dense')
  })

  it('should render without ripple', () => {
    const wrapper = mount(Button, {
      propsData: {
        ripple: false
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.vm.$data.mdcRipple).toBeUndefined()
  })
})
