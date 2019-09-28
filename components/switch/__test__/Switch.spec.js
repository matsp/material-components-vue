import { mount } from '@vue/test-utils'
import Switch from '../Switch.vue'

describe('Switch', () => {
  it('should mount', () => {
    const wrapper = mount(Switch)
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.vm.$data.mdcSwitch).toBeDefined()
  })

  it('should render with no prop', () => {
    const wrapper = mount(Switch)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-switch')
    expect(wrapper.find('input').attributes('disabled')).toBeUndefined()
  })

  it('should render as disabled', () => {
    const wrapper = mount(Switch, {
      propsData: {
        disabled: true
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-switch--disabled')
    expect(wrapper.find('input').attributes('disabled')).toBeDefined()
  })

  it('should render as checked', () => {
    const wrapper = mount(Switch, {
      propsData: {
        checked: true
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.vm.$data.mdcSwitch.checked).toBeTruthy()
    expect(wrapper.find('input').element.checked).toBeTruthy()
  })

  it('should render and emit', () => {
    const wrapper = mount(Switch)

    const input = wrapper.find('input')

    input.setChecked()
    expect(wrapper.emitted().change).toBeTruthy()
    expect(wrapper.vm.$data.mdcSwitch.checked).toBeTruthy()
    expect(wrapper.find('input').element.checked).toBeTruthy()

    input.setChecked(false)
    expect(wrapper.emitted().change).toBeTruthy()
    expect(wrapper.vm.$data.mdcSwitch.checked).toBeFalsy()
    expect(wrapper.find('input').element.checked).toBeFalsy()
  })
})
