<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'span'
    }
  },
  render: function (createElement) {
    return createElement(
      this.tag, // tag name
      {
        class: {
          'mdc-fab__icon': true
        },
        attrs: this.$attrs
      },
      this.$slots.default // array of children
    )
  }
}
</script>
