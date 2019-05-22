import 'mutationobserver-shim'
import { mount } from '@vue/test-utils'
import Snackbar from '../Snackbar.vue'

describe('Snackbar', () => {
  it('should mount', () => {
    let wrapper = mount(Snackbar)
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.vm.$data.mdcSnackbar).toBeDefined()
  })

  it('should render with no prop', () => {
    let wrapper = mount(Snackbar)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-snackbar')
    // todo: why the following doesn't work
    // expect(wrapper.isVisible()).toBe(false)
    expect(wrapper.find('button').exists()).toBeFalsy()
  })

  it('should render as open', () => {
    let wrapper = mount(Snackbar, {
      propsData: {
        open: true
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.isVisible()).toBe(true)
  })

  it('should render as leading', () => {
    let wrapper = mount(Snackbar, {
      propsData: {
        leading: true
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-snackbar--leading')
  })

  it('should render as stacked', () => {
    let wrapper = mount(Snackbar, {
      propsData: {
        stacked: true
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-snackbar--stacked')
  })

  it('should render with labelText', () => {
    let wrapper = mount(Snackbar, {
      propsData: {
        labelText: 'label text'
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.vm.$data.mdcSnackbar.labelText).toEqual('label text')
    expect(wrapper.find('.mdc-snackbar__label').text()).toEqual('label text')
  })

  it('should render with actionButton', () => {
    let wrapper = mount(Snackbar, {
      propsData: {
        actionButtonText: 'button'
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.vm.$data.mdcSnackbar.actionButtonText).toEqual('button')
    expect(wrapper.find('button').text()).toEqual('button')
  })

  it('should render with optional actionButton', () => {
    let wrapper = mount(Snackbar, {
      propsData: {
        actionButtonText: 'button'
      }
    })
    expect(wrapper.find('button').exists()).toBeTruthy()

    wrapper.setProps({ actionButtonText: '' })
    expect(wrapper.find('button').exists()).toBeFalsy()
  })

  it('should render and emit', () => {
    let wrapper = mount(Snackbar, {
      propsData: {
        actionButtonText: 'button'
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.props().open).toBe(false)
    wrapper.setProps({ open: true })
    expect(wrapper.emittedByOrder().map(e => e.name)).toEqual(['change', 'opening', 'change'])
    expect(wrapper.isVisible()).toBe(true)
    // todo: how can I wait until the end of opening and get the opened event?
  })
})
