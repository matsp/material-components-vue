<script>
import { themeClassMixin } from '../base'

export default {
  mixins: [themeClassMixin],
  props: {
    icon: {
      type: String,
      required: true
    },
    tag: {
      type: String,
      default: 'i'
    }
  },
  render: function (createElement) {
    const children = []
    if (this.$scopedSlots.default) {
      children.push(this.$scopedSlots.default({
        icon: this.icon
      }))
    } else {
      children.push(this.icon)
    }
    return createElement(
      this.tag,
      {
        class: {
          'material-icons': true
        }
      },
      children
    )
  }
}
</script>
