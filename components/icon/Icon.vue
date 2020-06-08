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
  render: function (h) {
    const children = []
    if (this.$scopedSlots.default) {
      children.push(this.$scopedSlots.default({
        icon: this.icon
      }))
    } else {
      children.push(this.icon)
    }
    return h(
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
