import 'mutationobserver-shim'
import { mount } from '@vue/test-utils'
import Checkbox from '../Checkbox.vue'

describe('Checkbox', () => {
  it('should mount', () => {
    const wrapper = mount(Checkbox)
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.vm.$data.mdcCheckbox).toBeDefined()
  })

  it('should render with no prop', () => {
    const wrapper = mount(Checkbox)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-checkbox')
    expect(wrapper.find('input').attributes('disabled')).toBeUndefined()
  })

  it('should render as disabled', () => {
    const wrapper = mount(Checkbox, {
      propsData: {
        disabled: true
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-checkbox--disabled')
    expect(wrapper.find('input').attributes('disabled')).toBeDefined()
  })

  it('should render as indeterminate', () => {
    const wrapper = mount(Checkbox, {
      propsData: {
        indeterminate: true
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.vm.$data.mdcCheckbox.indeterminate).toBeTruthy()
    expect(wrapper.find('input').element.checked).toBeFalsy()
    expect(wrapper.find('input').element.indeterminate).toBeTruthy()
  })

  it('should render as checked', () => {
    const wrapper = mount(Checkbox, {
      propsData: {
        checked: true
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.vm.$data.mdcCheckbox.checked).toBeTruthy()
    expect(wrapper.find('input').element.checked).toBeTruthy()
  })

  it('should render and emit', () => {
    const wrapper = mount(Checkbox)

    const input = wrapper.find('input')

    input.setChecked()
    expect(wrapper.emitted().change).toBeTruthy()
    expect(wrapper.emitted().change.length).toBe(1)
    expect(wrapper.emitted().change[0]).toEqual([true])
    expect(wrapper.vm.$data.mdcCheckbox.checked).toBeTruthy()
    expect(wrapper.find('input').element.checked).toBeTruthy()

    input.setChecked(false)
    expect(wrapper.emitted().change).toBeTruthy()
    expect(wrapper.emitted().change.length).toBe(2)
    expect(wrapper.emitted().change[1]).toEqual([false])
    expect(wrapper.vm.$data.mdcCheckbox.checked).toBeFalsy()
    expect(wrapper.find('input').element.checked).toBeFalsy()
  })
})
