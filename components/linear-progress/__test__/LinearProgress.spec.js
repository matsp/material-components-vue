import 'mutationobserver-shim'
import { mount } from '@vue/test-utils'
import LinearProgress from '../LinearProgress.vue'

describe('LinearProgress', () => {
  it('should mount', () => {
    const wrapper = mount(LinearProgress)
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.vm.$data.mdcLinearProgress).toBeDefined()
  })

  it('should render with no prop', () => {
    const wrapper = mount(LinearProgress)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-linear-progress')
    expect(wrapper.classes()).toContain('mdc-linear-progress--closed')
  })

  it('should render as open', () => {
    const wrapper = mount(LinearProgress, {
      propsData: {
        open: true
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.isVisible()).toBe(true)
  })

  it('should render as reversed', () => {
    const wrapper = mount(LinearProgress, {
      propsData: {
        open: true,
        reverse: true
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-linear-progress--reversed')
  })

  it('should render as indeterminate', () => {
    const wrapper = mount(LinearProgress, {
      propsData: {
        open: true,
        indeterminate: true
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-linear-progress--indeterminate')
  })
})
