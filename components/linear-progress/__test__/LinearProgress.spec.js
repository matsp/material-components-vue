import 'mutationobserver-shim'
import { mount } from '@vue/test-utils'
import LinearProgress from '../LinearProgress.vue'

describe('LinearProgress', () => {
  it('should mount', () => {
    let wrapper = mount(LinearProgress)
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.vm.$data.mdcLinearProgress).toBeDefined()
  })

  it('should render with no prop', () => {
    let wrapper = mount(LinearProgress)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-linear-progress')
    expect(wrapper.classes()).toContain('mdc-linear-progress--closed')
  })

  it('should render as open', () => {
    let wrapper = mount(LinearProgress, {
      propsData: {
        open: true
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.isVisible()).toBe(true)
  })

  it('should render as reversed', () => {
    let wrapper = mount(LinearProgress, {
      propsData: {
        open: true,
        reverse: true
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-linear-progress--reversed')
  })

  it('should render as indeterminate', () => {
    let wrapper = mount(LinearProgress, {
      propsData: {
        open: true,
        indeterminate: true
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-linear-progress--indeterminate')
  })
})
