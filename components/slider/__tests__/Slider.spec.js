import { mount } from '@vue/test-utils'
import Slider from '../Slider.vue'

describe('Slider', () => {
  it('should mount', () => {
    const wrapper = mount(Slider)
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.vm.$data.mdcSlider).toBeDefined()
  })

  it('should render with no prop', () => {
    const wrapper = mount(Slider)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-slider')
  })

  it('should render as discrete', () => {
    const wrapper = mount(Slider, {
      propsData: {
        discrete: true
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-slider--discrete')
  })

  it('should render and display markers', () => {
    const wrapper = mount(Slider, {
      propsData: {
        discrete: true,
        displayMarkers: true
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-slider--display-markers')
  })

  it('should render as disabled', () => {
    const wrapper = mount(Slider, {
      propsData: {
        disabled: true
      }
    })
    expect(wrapper).toMatchSnapshot()
  })
})
