import 'mutationobserver-shim'
import { mount } from '@vue/test-utils'
import Fab from '../Fab.vue'

describe('Fab', () => {
  it('should mount', () => {
    const wrapper = mount(Fab)
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.vm.$data.mdcRipple).toBeDefined()
    expect(wrapper.vm.$data.slotObserver).toBeDefined()
  })

  it('should render with no prop', () => {
    const wrapper = mount(Fab)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-fab')
  })

  it('should render as mini', () => {
    const wrapper = mount(Fab, {
      propsData: {
        mini: true
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-fab--mini')
  })

  it('should render as exited', () => {
    const wrapper = mount(Fab, {
      propsData: {
        exited: true
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-fab--exited')
  })

  it('should render as extended', () => {
    const wrapper = mount(Fab, {
      slots: {
        default: 'create'
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-fab--extended')
  })

  it('should render as absolute right', () => {
    const wrapper = mount(Fab, {
      propsData: {
        absoluteRight: true
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-fab--absolute-right')
  })

  it('should render without ripple', () => {
    const wrapper = mount(Fab, {
      propsData: {
        ripple: false
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.vm.$data.mdcRipple).toBeUndefined()
  })
})
