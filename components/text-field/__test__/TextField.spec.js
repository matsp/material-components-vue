import 'mutationobserver-shim'
import { mount } from '@vue/test-utils'
import TextField from '../TextField.vue'
import TextFieldIcon from '../TextFieldIcon.vue'

describe('Text Field', () => {
  it('should mount', () => {
    const wrapper = mount(TextField)
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.vm.$data.mdcTextField).toBeDefined()
  })

  it('should render with no prop', () => {
    const wrapper = mount(TextField)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-text-field')
    expect(wrapper.classes()).toContain('mdc-text-field--no-label')
    expect(wrapper.find('input').attributes('disabled')).toBeUndefined()
  })

  it('should render as focused', () => {
    const wrapper = mount(TextField)
    const input = wrapper.find('input')
    input.trigger('focus')
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-text-field--focused')
  })

  it('should render as disabled', () => {
    const wrapper = mount(TextField, {
      propsData: {
        disabled: true
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-text-field--disabled')
    expect(wrapper.find('input').attributes('disabled')).toBeDefined()
  })

  it('should render as outlined', () => {
    const wrapper = mount(TextField, {
      propsData: {
        outlined: true
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-text-field--outlined')
    expect(wrapper.find('.mdc-notched-outline').exists()).toBe(true)
  })

  it('should render as dense', () => {
    const wrapper = mount(TextField, {
      propsData: {
        dense: true
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-text-field--dense')
  })

  it('should render as fullWidth', () => {
    const wrapper = mount(TextField, {
      propsData: {
        fullWidth: true
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-text-field--fullwidth')
  })

  it('should render and emit', () => {
    const wrapper = mount(TextField, {
      propsData: {
        value: 'val'
      }
    })

    const input = wrapper.find('input')
    input.setValue('test')
    expect(wrapper.emitted().model.length).toBe(1)
    expect(wrapper.emitted().model[0]).toEqual(['test'])
  })

  it('should render with leading icon', () => {
    const wrapper = mount(TextField, {
      slots: {
        leadingIcon: TextFieldIcon
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-text-field--with-leading-icon')
  })

  it('should render with trailing icon', () => {
    const wrapper = mount(TextField, {
      slots: {
        trailingIcon: TextFieldIcon
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-text-field--with-trailing-icon')
  })
})
