import 'mutationobserver-shim'
import { mount } from '@vue/test-utils'
import List from '../List'
import ListDivider from '../ListDivider'
import ListGroup from '../ListGroup'
import ListGroupDivider from '../ListGroupDivider'
import ListGroupSubheader from '../ListGroupSubheader'
import ListItem from '../ListItem'

describe('List', () => {
  it('should mount', () => {
    const wrapper = mount(List)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('should render with no prop', () => {
    const wrapper = mount(List)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-list')
  })

  it('should render as dense', () => {
    const wrapper = mount(List, {
      propsData: {
        dense: true
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-list--dense')
  })

  it('should render as two line', () => {
    const wrapper = mount(List, {
      propsData: {
        twoLine: true
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-list--two-line')
  })

  it('should render as avatar', () => {
    const wrapper = mount(List, {
      propsData: {
        avatar: true
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-list--avatar-list')
  })

  it('should render as non interactive', () => {
    const wrapper = mount(List, {
      propsData: {
        nonInteractive: true
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-list--non-interactive')
  })

  it('should render as nav', () => {
    const wrapper = mount(List, {
      propsData: {
        tag: 'nav'
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('nav').classes()).toContain('mdc-list')
  })

  it('should render as div', () => {
    const wrapper = mount(List, {
      propsData: {
        tag: 'div'
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('div').classes()).toContain('mdc-list')
  })
})

describe('List Divider', () => {
  it('should mount', () => {
    const wrapper = mount(ListDivider)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('should render with no prop', () => {
    const wrapper = mount(ListDivider)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-list-divider')
  })

  it('should render as inset', () => {
    const wrapper = mount(ListDivider, {
      propsData: {
        inset: true
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-list-divider--inset')
  })

  it('should render as padded', () => {
    const wrapper = mount(ListDivider, {
      propsData: {
        padded: true
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-list-divider--padded')
  })
})

describe('List Group', () => {
  it('should mount', () => {
    const wrapper = mount(ListGroup)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('should render with no prop', () => {
    const wrapper = mount(ListGroup)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-list-group')
  })
})

describe('List Group Divider', () => {
  it('should mount', () => {
    const wrapper = mount(ListGroupDivider)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('should render with no prop', () => {
    const wrapper = mount(ListGroupDivider)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-list-divider')
  })

  it('should render as inset', () => {
    const wrapper = mount(ListGroupDivider, {
      propsData: {
        inset: true
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-list-divider--inset')
  })

  it('should render as padded', () => {
    const wrapper = mount(ListGroupDivider, {
      propsData: {
        padded: true
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-list-divider--padded')
  })
})

describe('List Group Subheader', () => {
  it('should mount', () => {
    const wrapper = mount(ListGroupSubheader)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('should render with no prop', () => {
    const wrapper = mount(ListGroupSubheader)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-list-group__subheader')
  })

  it('should render as h1', () => {
    const wrapper = mount(ListGroupSubheader, {
      propsData: {
        level: 1
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('h1').classes()).toContain('mdc-list-group__subheader')
  })
})

describe('List Item', () => {
  it('should mount', () => {
    const wrapper = mount(ListItem)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('should render with no prop', () => {
    const wrapper = mount(ListItem)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-list-item')
  })

  it('should render as activated', () => {
    const wrapper = mount(ListItem, {
      propsData: {
        activated: true
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-list-item--activated')
  })

  it('should render as selected', () => {
    const wrapper = mount(ListItem, {
      propsData: {
        selected: true
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-list-item--selected')
  })

  it('should render as disabled', () => {
    const wrapper = mount(ListItem, {
      propsData: {
        disabled: true
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-list-item--disabled')
  })
})
