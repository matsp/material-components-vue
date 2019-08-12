import 'mutationobserver-shim'
import { mount } from '@vue/test-utils'
import Drawer from '../Drawer.vue'
import DrawerAppContent from '../DrawerAppContent'
import DrawerHeader from '../DrawerHeader'
import DrawerContent from '../DrawerContent'
import DrawerScrim from '../DrawerScrim'

describe('Drawer', () => {
  it('should mount', () => {
    const wrapper = mount(Drawer)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('should render with no prop', () => {
    const wrapper = mount(Drawer)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-drawer')
  })

  it('should render as modal', () => {
    const wrapper = mount(Drawer, {
      propsData: {
        modal: true
      }
    })

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-drawer--modal')
  })

  it('should render as dismissible', () => {
    const wrapper = mount(Drawer, {
      propsData: {
        dismissible: true
      }
    })

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-drawer--dismissible')
  })

  it('should render with title', () => {
    const wrapper = mount(Drawer, {
      propsData: {
        title: 'title'
      }
    })

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('.mdc-drawer__header').exists()).toBe(true)
    expect(wrapper.find('h3').exists()).toBe(true)
    expect(wrapper.find('h3').classes()).toContain('mdc-drawer__title')
    expect(wrapper.find('h3').text()).toBe('title')
  })

  it('should render with subtitle', () => {
    const wrapper = mount(Drawer, {
      propsData: {
        subtitle: 'title'
      }
    })

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('.mdc-drawer__header').exists()).toBe(true)
    expect(wrapper.find('h6').exists()).toBe(true)
    expect(wrapper.find('h6').classes()).toContain('mdc-drawer__subtitle')
    expect(wrapper.find('h6').text()).toBe('title')
  })
})

describe('DrawerAppContent', () => {
  it('should mount', () => {
    const wrapper = mount(DrawerAppContent)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('should render with no prop', () => {
    const wrapper = mount(DrawerAppContent)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-drawer-app-content')
  })
})

describe('DrawerScrim', () => {
  it('should mount', () => {
    const wrapper = mount(DrawerScrim)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('should render with no prop', () => {
    const wrapper = mount(DrawerScrim)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-drawer-scrim')
  })
})

describe('DrawerHeader', () => {
  it('should mount', () => {
    const wrapper = mount(DrawerHeader)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('should render with no prop', () => {
    const wrapper = mount(DrawerHeader, {
      slots: {
        default: '123'
      }
    })

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-drawer__header')
    expect(wrapper.text()).toBe('123')
  })

  it('should render with title', () => {
    const wrapper = mount(DrawerHeader, {
      propsData: {
        title: 'title'
      }
    })

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('h3').exists()).toBe(true)
    expect(wrapper.find('h3').classes()).toContain('mdc-drawer__title')
    expect(wrapper.find('h3').text()).toBe('title')
  })

  it('should render with subtitle', () => {
    const wrapper = mount(DrawerHeader, {
      propsData: {
        subtitle: 'title'
      }
    })

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('h6').exists()).toBe(true)
    expect(wrapper.find('h6').classes()).toContain('mdc-drawer__subtitle')
    expect(wrapper.find('h6').text()).toBe('title')
  })
})

describe('DrawerContent', () => {
  it('should mount', () => {
    const wrapper = mount(DrawerContent)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('should render with no prop', () => {
    const wrapper = mount(DrawerContent, {
      slots: {
        default: '123'
      }
    })

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-drawer__content')
    expect(wrapper.text()).toBe('123')
  })
})
