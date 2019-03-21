import 'mutationobserver-shim'
import { mount } from '@vue/test-utils'
import Card from '../Card.vue'
import CardMedia from '../CardMedia.vue'
import Button from '../../button/Button.vue'
import IconButton from '../../icon-button/IconButton.vue'

describe('Card Media', () => {
  it('should mount', () => {
    let wrapper = mount(CardMedia)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('should render with no prop', () => {
    let wrapper = mount(CardMedia)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-card__media')
  })

  it('should render as square', () => {
    let wrapper = mount(CardMedia, {
      propsData: {
        square: true
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-card__media--square')
  })

  it('should render as 16:9', () => {
    let wrapper = mount(CardMedia, {
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
    let wrapper = mount(Card)
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.vm.$data.slotObserver).toBeDefined()
  })

  it('should render with no prop', () => {
    let wrapper = mount(Card)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-card')
  })

  it('should render as outlined', () => {
    let wrapper = mount(Card, {
      propsData: {
        outlined: true
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-card--outlined')
  })

  it('should render as primary action', () => {
    let wrapper = mount(Card, {
      slots: {
        actionableContent: 'content'
      }
    })
    expect(wrapper).toMatchSnapshot()
    let content = wrapper.find('.mdc-card__primary-action')
    expect(content).toBeDefined()
    expect(content.attributes().tabindex).toBe('0')
  })

  it('should render with full bleed action', () => {
    let wrapper = mount(Card, {
      propsData: {
        fullBleedAction: true
      },
      slots: {
        fullBleedButton: Button
      }
    })
    expect(wrapper).toMatchSnapshot()
    let actions = wrapper.find('.mdc-card__actions')
    expect(actions.classes()).toContain('mdc-card__actions--full-bleed')
    expect(actions.find('.mdc-button').classes()).toContain('mdc-card__action')
    expect(actions.find('.mdc-button').classes()).toContain('mdc-card__action--button')
  })

  it('should render with action buttons', () => {
    let wrapper = mount(Card, {
      slots: {
        actionButtons: [Button, Button]
      }
    })
    expect(wrapper).toMatchSnapshot()
    let actions = wrapper.find('.mdc-card__actions')
    actions.findAll('.mdc-button').wrappers.forEach(w => {
      expect(w.classes()).toContain('mdc-card__action')
      expect(w.classes()).toContain('mdc-card__action--button')
    })
  })

  it('should render with action icons', () => {
    let wrapper = mount(Card, {
      slots: {
        actionIcons: [IconButton, IconButton]
      }
    })
    expect(wrapper).toMatchSnapshot()
    let actions = wrapper.find('.mdc-card__actions')
    actions.findAll('.mdc-icon-button').wrappers.forEach(w => {
      expect(w.classes()).toContain('mdc-card__action')
      expect(w.classes()).toContain('mdc-card__action--icon')
    })
  })
})
