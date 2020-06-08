<script>
import { baseComponentMixin, themeClassMixin } from '../base'
import modifierAssign from '../../utils/modifierAssign'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  props: {
    outlined: {
      type: Boolean,
      default: false
    },
    fullBleedAction: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      return {
        'mdc-card': true,
        'mdc-card--outlined': this.outlined
      }
    },
    actionClasses () {
      return {
        'mdc-card__actions--full-bleed': this.fullBleedAction
      }
    }
  },
  render (h) {
    const tag = 'div'
    const data = {
      class: this.classes,
      attrs: this.$attrs,
      on: this.$listeners
    }

    // todo: refactor the codes to make it shorter
    const children = this.$scopedSlots.default ? this.$scopedSlots.default() : []

    const fullBleedAction = this.$scopedSlots.fullBleedAction ? this.$scopedSlots.fullBleedAction() : null
    if (fullBleedAction) {
      modifierAssign(fullBleedAction, 'mdc-card__action', 'mdc-card__action--button')
      children.push(h(
        'div',
        {
          class: {
            'mdc-card__actions': true,
            'mdc-card__actions--full-bleed': true
          }
        },
        fullBleedAction
      ))
    }

    const actions = this.$scopedSlots.actions ? this.$scopedSlots.actions() : null
    if (actions) {
      for (let i = 0; i < actions.length; i++) {
        if (actions[i].text != null) continue
        if (actions[i].data.class) {
          actions[i].data.class['mdc-card__action'] = true
          if (Object.keys(actions[i].data.class).filter(s => s.search('icon')).length > 0) {
            actions[i].data.class['mdc-card__action--icon'] = true
          } else {
            actions[i].data.class['mdc-card__action--button'] = true
          }
        } else {
          actions[i].data.class = {
            'mdc-card__action': true,
            'mdc-card__action--button': true
          }
        }
      }
      children.push(h(
        'div',
        {
          class: {
            'mdc-card__actions': true
          }
        },
        actions
      ))
    }

    const actionButtons = this.$scopedSlots.actionButtons ? this.$scopedSlots.actionButtons() : null
    const actionIcons = this.$scopedSlots.actionIcons ? this.$scopedSlots.actionIcons() : null
    if (actionButtons || actionIcons) {
      const actionsChildren = []
      if (actionButtons) {
        modifierAssign(actionButtons, 'mdc-card__action', 'mdc-card__action--button')
        actionsChildren.push(h(
          'div',
          {
            class: {
              'mdc-card__action-buttons': true
            }
          },
          actionButtons
        ))
      }

      if (actionIcons) {
        modifierAssign(actionIcons, 'mdc-card__action', 'mdc-card__action--icon')
        actionsChildren.push(h(
          'div',
          {
            class: {
              'mdc-card__action-icons': true
            }
          },
          actionIcons
        ))
      }
      children.push(h(
        'div',
        {
          class: {
            'mdc-card__actions': true
          }
        },
        actionsChildren
      ))
    }

    return h(
      tag,
      data,
      children
    )
  }
}
</script>
