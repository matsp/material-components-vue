<script>
import { baseComponentMixin, themeClassMixin } from '@components/base'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  props: {
    level: {
      type: Number,
      default: 3,
      validator: function (value) {
        return value > 0 && value < 7
      }
    }
  },
  render: function (createElement) {
    return createElement(
      'h' + this.level, // tag name
      {
        class: {
          'mdc-list-group__subheader': true
        }
      }, this.$slots.default // array of children
    )
  }
}
</script>
