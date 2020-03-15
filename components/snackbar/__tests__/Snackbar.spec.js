import 'mutationobserver-shim'
import { mount } from '@vue/test-utils'
import Snackbar from '../Snackbar.vue'

describe('Snackbar', () => {
  it('should mount', () => {
    const wrapper = mount(Snackbar)
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.vm.$data.mdcSnackbar).toBeDefined()
  })

  it('should render with no prop', () => {
    const wrapper = mount(Snackbar)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-snackbar')
    expect(wrapper.find('button').exists()).toBeFalsy()
    expect(wrapper.vm.$data.mdcSnackbar.isOpen).toBe(false)
  })

  it('should render as open', () => {
    const wrapper = mount(Snackbar, {
      propsData: {
        open: true
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.isVisible()).toBe(true)
  })

  it('should render as leading', () => {
    const wrapper = mount(Snackbar, {
      propsData: {
        leading: true
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-snackbar--leading')
  })

  it('should render as stacked', () => {
    const wrapper = mount(Snackbar, {
      propsData: {
        stacked: true
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-snackbar--stacked')
  })

  it('should render with labelText', () => {
    const wrapper = mount(Snackbar, {
      propsData: {
        labelText: 'label text'
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.vm.$data.mdcSnackbar.labelText).toEqual('label text')
    expect(wrapper.find('.mdc-snackbar__label').text()).toEqual('label text')
  })

  it('should render with actionButton', () => {
    const wrapper = mount(Snackbar, {
      propsData: {
        actionButtonText: 'button'
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.vm.$data.mdcSnackbar.actionButtonText).toEqual('button')
    const action = wrapper.find('.mdc-snackbar__action')
    expect(action.exists()).toBe(true)
    expect(action.text()).toEqual('button')
  })

  it('should render with dismiss', () => {
    const wrapper = mount(Snackbar, {
      propsData: {
        hasDismiss: true
      }
    })
    expect(wrapper).toMatchSnapshot()
    const dismiss = wrapper.find('.mdc-snackbar__dismiss')

    expect(dismiss.exists()).toBe(true)
  })

  it('should render with optional actionButton', () => {
    const wrapper = mount(Snackbar, {
      propsData: {
        actionButtonText: 'button'
      }
    })
    expect(wrapper.find('.mdc-snackbar__action').exists()).toBeTruthy()

    wrapper.setProps({ actionButtonText: '' })
    expect(wrapper.find('.mdc-snackbar__action').exists()).toBeFalsy()
  })

  it('should render with optional dismiss', () => {
    const wrapper = mount(Snackbar, {
      propsData: {
        hasDismiss: true
      }
    })
    expect(wrapper.find('.mdc-snackbar__dismiss').exists()).toBeTruthy()

    wrapper.setProps({ hasDismiss: false })
    expect(wrapper.find('.mdc-snackbar__dismiss').exists()).toBeFalsy()
  })

  it('should render with dismiss using mdi', () => {
    const wrapper = mount(Snackbar, {
      propsData: {
        hasDismiss: true,
        dismissClass: 'mdi mdi-close'
      }
    })
    expect(wrapper).toMatchSnapshot()
    const dismiss = wrapper.find('.mdc-snackbar__dismiss')

    expect(dismiss.text().trim()).toBe('')
    expect(dismiss.classes()).toContain('mdi')
    expect(dismiss.classes()).toContain('mdi-close')
  })
})
