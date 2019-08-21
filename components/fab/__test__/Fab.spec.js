import 'mutationobserver-shim'
import { mount } from '@vue/test-utils'
import Fab from '../Fab.vue'
import FabLabel from '../FabLabel'
import FabIcon from '../FabIcon'

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
        default: FabLabel
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

describe('Fab Icon', () => {
  it('should mount', () => {
    const wrapper = mount(FabIcon, {})
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('should render with no prop', () => {
    const wrapper = mount(FabIcon, {
      slots: {
        default: 'favorite'
      }
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-fab__icon')
  })
})

describe('Fab Label', () => {
  it('should mount', () => {
    const wrapper = mount(FabLabel, {})
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('should render with no prop', () => {
    const wrapper = mount(FabLabel, {})
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-fab__label')
  })
})
