import 'mutationobserver-shim'
import { mount } from '@vue/test-utils'
import Button from '../Button.vue'

describe('Button', () => {
  it('should mount', () => {
    let wrapper = mount(Button)
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.vm.$data.mdcRipple).toBeDefined()
    expect(wrapper.vm.$data.slotObserver).toBeDefined()
  })

  it('should render with no prop', () => {
    let wrapper = mount(Button)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-button')
  })

  it('should render as raised', () => {
    let wrapper = mount(Button, {
      propsData: {
        raised: true
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-button--raised')
  })

  it('should render as unelevated', () => {
    let wrapper = mount(Button, {
      propsData: {
        unelevated: true
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-button--unelevated')
  })

  it('should render as outlined', () => {
    let wrapper = mount(Button, {
      propsData: {
        outlined: true
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-button--outlined')
  })

  it('should render as dense', () => {
    let wrapper = mount(Button, {
      propsData: {
        dense: true
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-button--dense')
  })
})
