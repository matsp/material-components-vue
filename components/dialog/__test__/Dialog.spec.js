import 'mutationobserver-shim'
import { mount } from '@vue/test-utils'
import Dialog from '../Dialog.vue'

describe('Dialog', () => {
  it('should mount', () => {
    const wrapper = mount(Dialog)
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.vm.$data.mdcDialog).toBeDefined()
  })

  it('should render with no prop', () => {
    const wrapper = mount(Dialog)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-dialog')
  })

  it('should render as scrollable', () => {
    const wrapper = mount(Dialog, {
      propsData: {
        scrollable: true
      }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('mdc-dialog--scrollable')
  })

  it('should render and emit', () => {
    const wrapper = mount(Dialog)

    wrapper.setProps({ open: true })

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.emittedByOrder().map(e => e.name)).toEqual(['opening'])
    expect(wrapper.vm.$data.mdcDialog.isOpen).toBe(true)
    expect(wrapper.isVisible()).toBe(true)

    wrapper.find('.mdc-dialog__scrim').trigger('click')
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.emittedByOrder().map(e => e.name)).toEqual(['opening', 'closing'])
    expect(wrapper.emitted().closing[0]).toEqual([{ action: 'close' }])
    expect(wrapper.vm.$data.mdcDialog.isOpen).toBe(false)
  })
})
