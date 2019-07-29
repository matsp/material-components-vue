import 'mutationobserver-shim'
import { mount } from '@vue/test-utils'
import Card from '../Card.vue'
import CardMedia from '../CardMedia.vue'
import Button from '../../button/Button.vue'
import IconButton from '../../icon-button/IconButton.vue'
import CardPrimaryAction from '../CardPrimaryAction'

describe('Card Media', () => {
  it('should mount', () => {
    const wrapper = mount(CardMedia)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('should render with no prop', () => {
    const wrapper = mount(CardMedia)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-card__media')
  })

  it('should render as square', () => {
    const wrapper = mount(CardMedia, {
      propsData: {
        square: true
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-card__media--square')
  })

  it('should render as 16:9', () => {
    const wrapper = mount(CardMedia, {
      propsData: {
        sixteenNine: true
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-card__media--16-9')
  })
})

describe('Card', () => {
  it('should mount', () => {
    const wrapper = mount(Card)
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.vm.$data.slotObserver).toBeDefined()
  })

  it('should render with no prop', () => {
    const wrapper = mount(Card)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-card')
  })

  it('should render as outlined', () => {
    const wrapper = mount(Card, {
      propsData: {
        outlined: true
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-card--outlined')
  })

  it('should render with full bleed action', () => {
    const wrapper = mount(Card, {
      propsData: {
        fullBleedAction: true
      },
      slots: {
        fullBleedButton: Button
      }
    })
    expect(wrapper).toMatchSnapshot()
    const actions = wrapper.find('.mdc-card__actions')
    expect(actions.classes()).toContain('mdc-card__actions--full-bleed')
    expect(actions.find('.mdc-button').classes()).toContain('mdc-card__action')
    expect(actions.find('.mdc-button').classes()).toContain('mdc-card__action--button')
  })

  it('should render with action buttons', () => {
    const wrapper = mount(Card, {
      slots: {
        actionButtons: [Button, Button]
      }
    })
    expect(wrapper).toMatchSnapshot()
    const actions = wrapper.find('.mdc-card__actions')
    actions.findAll('.mdc-button').wrappers.forEach(w => {
      expect(w.classes()).toContain('mdc-card__action')
      expect(w.classes()).toContain('mdc-card__action--button')
    })
  })

  it('should render with action icons', () => {
    const wrapper = mount(Card, {
      slots: {
        actionIcons: [IconButton, IconButton]
      }
    })
    expect(wrapper).toMatchSnapshot()
    const actions = wrapper.find('.mdc-card__actions')
    actions.findAll('.mdc-icon-button').wrappers.forEach(w => {
      expect(w.classes()).toContain('mdc-card__action')
      expect(w.classes()).toContain('mdc-card__action--icon')
    })
  })

  it('should render with primary action', () => {
    const wrapper = mount(Card, {
      slots: {
        default: [CardMedia]
      },
      propsData: {
        primaryAction: true
      }
    })
    expect(wrapper).toMatchSnapshot()

    const primaryAction = wrapper.find('.mdc-card__primary-action')
    expect(primaryAction.exists()).toBe(true)
    expect(primaryAction.find('.mdc-card__media').exists()).toBe(true)
  })
})

describe('CardPrimaryAction', () => {
  it('should mount', () => {
    const wrapper = mount(CardPrimaryAction)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('should render with no prop', () => {
    const wrapper = mount(CardPrimaryAction)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-card__primary-action')
    expect(wrapper.vm.$data.mdcRipple).toBeDefined()
  })

  it('should render without ripple', () => {
    const wrapper = mount(CardPrimaryAction, {
      propsData: {
        ripple: false
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.vm.$data.mdcRipple).toBeUndefined()
  })
})
