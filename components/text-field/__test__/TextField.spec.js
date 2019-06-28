import 'mutationobserver-shim'
import { mount } from '@vue/test-utils'
import TextField from '../TextField.vue'
import TextFieldCharacterCounter from '../TextFieldCharacterCounter.vue'
import TextFieldIcon from '../TextFieldIcon.vue'
import TextFIeldHelperText from '../TextFieldHelperText.vue'

describe('Text Field', () => {
  it('should mount', () => {
    let wrapper = mount(TextField)
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.vm.$data.mdcTextField).toBeDefined()
  })

  it('should render with no prop', () => {
    let wrapper = mount(TextField)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-text-field')
    expect(wrapper.classes()).toContain('mdc-text-field--no-label')
    expect(wrapper.find('input').attributes('disabled')).toBeUndefined()
  })

  it('should render as focused', () => {
    let wrapper = mount(TextField)
    let input = wrapper.find('input')
    input.trigger('focus')
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-text-field--focused')
  })

  it('should render as disabled', () => {
    let wrapper = mount(TextField, {
      propsData: {
        disabled: true
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-text-field--disabled')
    expect(wrapper.find('input').attributes('disabled')).toBeDefined()
  })

  it('should render as outlined', () => {
    let wrapper = mount(TextField, {
      propsData: {
        outlined: true
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-text-field--outlined')
    expect(wrapper.find('.mdc-notched-outline').exists()).toBe(true)
  })

  it('should render as dense', () => {
    let wrapper = mount(TextField, {
      propsData: {
        dense: true
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-text-field--dense')
  })

  it('should render as fullWidth', () => {
    let wrapper = mount(TextField, {
      propsData: {
        fullWidth: true
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-text-field--fullwidth')
  })

  it('should render and emit', () => {
    let wrapper = mount(TextField, {
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
    let wrapper = mount(TextField, {
      slots: {
        leadingIcon: TextFieldIcon
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-text-field--with-leading-icon')
  })

  it('should render with trailing icon', () => {
    let wrapper = mount(TextField, {
      slots: {
        trailingIcon: TextFieldIcon
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-text-field--with-trailing-icon')
  })
})
