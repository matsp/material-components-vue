import 'mutationobserver-shim'
import { mount } from '@vue/test-utils'
import ImageList from '../ImageList.vue'
import ImageListItem from '../ImageListItem'

describe('ImageList', () => {
  it('should mount', () => {
    const wrapper = mount(ImageList)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('should render with no prop', () => {
    const wrapper = mount(ImageList)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-image-list')
  })

  it('should render as standard', () => {
    const wrapper = mount(ImageList, {
      propsData: {
        column: 1
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('image-list-standard-1')
  })

  it('should render as masonry', () => {
    const wrapper = mount(ImageList, {
      propsData: {
        masonry: true,
        column: 1
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-image-list--masonry')
    expect(wrapper.classes()).toContain('image-list-masonry-1')
  })

  it('should render with text-protection', () => {
    const wrapper = mount(ImageList, {
      propsData: {
        textProtection: true
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-image-list--with-text-protection')
  })
})

describe('ImageListItem', () => {
  it('should mount', () => {
    const wrapper = mount(ImageListItem)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('should render with no prop', () => {
    const wrapper = mount(ImageListItem)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-image-list__item')
    expect(wrapper.vm.$data.slotObserver).toBeDefined()
  })

  it('should render without adjust aspect ratio', () => {
    const wrapper = mount(ImageListItem, {
      propsData: {
        adjustAspectRatio: false
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('.mdc-image-list__image-aspect-container').exists()).toBe(false)
  })

  it('should render with img', () => {
    const wrapper = mount(ImageListItem, {
      slots: {
        image: '<img src="cat.jpg" alt="Cat">'
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('.mdc-image-list__image').is('img')).toBe(true)
  })
})
