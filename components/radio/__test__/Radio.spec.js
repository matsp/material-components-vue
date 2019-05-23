import 'mutationobserver-shim'
import { mount } from '@vue/test-utils'
import Radio from '../Radio.vue'

describe('Checkbox', () => {
  it('should mount', () => {
    let wrapper = mount(Radio)
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.vm.$data.mdcRadio).toBeDefined()
  })

  it('should render with no prop', () => {
    let wrapper = mount(Radio)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-radio')
    expect(wrapper.find('input').attributes('disabled')).toBeUndefined()
  })

  it('should render as disabled', () => {
    let wrapper = mount(Radio, {
      propsData: {
        disabled: true
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-radio--disabled')
    expect(wrapper.find('input').attributes('disabled')).toBeDefined()
  })

  it('should render and emit', () => {
    let wrapper = mount(Radio, {
      propsData: {
        value: 'val'
      }
    })

    const radio = wrapper.find('input')
    radio.setChecked(true)
    expect(wrapper.emitted().change.length).toBe(1)
    expect(wrapper.emitted().change[0]).toEqual(['val'])
  })
})
