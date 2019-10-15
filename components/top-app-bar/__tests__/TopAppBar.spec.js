import 'mutationobserver-shim'
import { mount } from '@vue/test-utils'
import TopAppBar from '../TopAppBar.vue'
import IconButton from '../../icon-button/IconButton.vue'
import TopAppBarFixedAdjust from '../TopAppBarFixedAdjust'

describe('Top App Bar', () => {
  it('should mount', () => {
    const wrapper = mount(TopAppBar)
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.vm.$data.mdcTopAppBar).toBeDefined()
  })

  it('should render with no prop', () => {
    const wrapper = mount(TopAppBar)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-top-app-bar')
  })

  it('should render as short', () => {
    const wrapper = mount(TopAppBar, {
      propsData: {
        short: true
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-top-app-bar--short')
  })

  it('should render as short and collapsed', () => {
    const wrapper = mount(TopAppBar, {
      propsData: {
        short: true,
        collapsed: true
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-top-app-bar--short-collapsed')
  })

  it('should render as prominent', () => {
    const wrapper = mount(TopAppBar, {
      propsData: {
        prominent: true
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-top-app-bar--prominent')
  })

  it('should render as dense', () => {
    const wrapper = mount(TopAppBar, {
      propsData: {
        dense: true
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-top-app-bar--dense')
  })

  it('should render as fixed', () => {
    const wrapper = mount(TopAppBar, {
      propsData: {
        fixed: true
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-top-app-bar--fixed')
  })

  it('should render with title', () => {
    const wrapper = mount(TopAppBar, {
      propsData: {
        title: 'title text'
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('.mdc-top-app-bar__title').text()).toEqual('title text')
  })

  it('should render with optional action button', () => {
    const wrapper = mount(TopAppBar, {
      slots: {
        actions: IconButton
      }
    })
    expect(wrapper.find('.mdc-top-app-bar__action-item').exists()).toBeTruthy()
  })

  it('should render with optional navigation button', () => {
    const wrapper = mount(TopAppBar, {
      slots: {
        navigation: IconButton
      }
    })
    expect(wrapper.find('.mdc-top-app-bar__navigation-icon').exists()).toBeTruthy()
    wrapper.find('.mdc-top-app-bar__navigation-icon').trigger('click')
    expect(wrapper.emitted().nav).toBeTruthy()
  })
})

describe('Top App Bar Fixed Adjust', () => {
  it('should mount', () => {
    const wrapper = mount(TopAppBarFixedAdjust)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('should render with no prop', () => {
    const wrapper = mount(TopAppBarFixedAdjust)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-top-app-bar--fixed-adjust')
    expect(wrapper.is('div')).toBe(true)
  })

  it('should render as short', () => {
    const wrapper = mount(TopAppBarFixedAdjust, {
      propsData: {
        short: true
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-top-app-bar--short-fixed-adjust')
  })

  it('should render as dense and prominent', () => {
    const wrapper = mount(TopAppBarFixedAdjust, {
      propsData: {
        dense: true,
        prominent: true
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-top-app-bar--dense-prominent-fixed-adjust')
  })

  it('should render as prominent', () => {
    const wrapper = mount(TopAppBarFixedAdjust, {
      propsData: {
        prominent: true
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-top-app-bar--prominent-fixed-adjust')
  })

  it('should render as dense', () => {
    const wrapper = mount(TopAppBarFixedAdjust, {
      propsData: {
        dense: true
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-top-app-bar--dense-fixed-adjust')
  })

  it('should render as main', () => {
    const wrapper = mount(TopAppBarFixedAdjust, {
      propsData: {
        tag: 'main'
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.is('main')).toBe(true)
  })
})
