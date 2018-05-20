const themeProps = [
  'primary',
  'secondary',
  'background',
  'surface',
  'on-primary',
  'on-secondary',
  'on-surface',
  'primary-bg',
  'secondary-bg',
  'text-primary-on-light',
  'text-secondary-on-light',
  'text-hint-on-light',
  'text-disabled-on-light',
  'text-icon-on-light',
  'text-primary-on-dark',
  'text-secondary-on-dark',
  'text-hint-on-dark',
  'text-disabled-on-dark',
  'text-icon-on-dark'
]

const themeClassMixin = {
  props: {
    theming: {
      type: String,
      default: ''
    }
  },
  mounted () {
    if (themeProps.indexOf(this.theming) > -1) {
      this.$el.classList.add('mdc-theme--' + this.theming)
    }
  }
}
export default themeClassMixin
