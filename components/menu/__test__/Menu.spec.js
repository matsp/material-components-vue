import { mount } from '@vue/test-utils'
import Menu from '../Menu.vue'
import MenuAnchor from '../MenuAnchor.vue'
import MenuSurface from '../MenuSurface'
import MenuSelectionGroup from '../MenuSelectionGroup'
import 'mutationobserver-shim'

describe('Menu', () => {
  it('should mount', () => {
    const wrapper = mount(Menu)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('should render with no prop', () => {
    const wrapper = mount(Menu)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-menu')
    expect(wrapper.classes()).toContain('mdc-menu-surface')
  })

  it('should render as fixed', () => {
    const wrapper = mount(Menu, {
      propsData: {
        fixed: true
      }
    })
    expect(wrapper).toMatchSnapshot()
  })
})

describe('MenuSurface', () => {
  it('should mount', () => {
    const wrapper = mount(MenuSurface)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('should render with no prop', () => {
    const wrapper = mount(MenuSurface)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-menu-surface')
  })

  it('should render as fixed', () => {
    const wrapper = mount(MenuSurface, {
      propsData: {
        fixed: true
      }
    })
    expect(wrapper).toMatchSnapshot()
  })
})

describe('MenuAnchor', () => {
  it('should mount', () => {
    const wrapper = mount(MenuAnchor)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('should render with no prop', () => {
    const wrapper = mount(MenuAnchor)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-menu-surface--anchor')
  })
})

describe('MenuSelectionGroup', () => {
  it('should mount', () => {
    const wrapper = mount(MenuSelectionGroup)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('should render with no prop', () => {
    const wrapper = mount(MenuSelectionGroup)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-menu__selection-group')
  })
})
