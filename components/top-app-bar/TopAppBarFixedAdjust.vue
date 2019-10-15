<script>
export default {
  props: {
    dense: {
      type: Boolean,
      default: false
    },
    short: {
      type: Boolean,
      default: false
    },
    prominent: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: 'div'
    }
  },
  computed: {
    classes () {
      return {
        'mdc-top-app-bar--fixed-adjust': true,
        'mdc-top-app-bar--dense-fixed-adjust': this.dense && !this.short && !this.prominent,
        'mdc-top-app-bar--short-fixed-adjust': this.short,
        'mdc-top-app-bar--prominent-fixed-adjust': this.prominent && !this.short && !this.dense,
        'mdc-top-app-bar--dense-prominent-fixed-adjust': this.dense && this.prominent
      }
    }
  },
  render: function (createElement) {
    return createElement(
      this.tag, // tag name,
      {
        class: this.classes
      },
      this.$slots.default // array of children
    )
  }
}
</script>
