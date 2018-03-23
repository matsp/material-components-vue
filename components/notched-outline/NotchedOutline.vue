<script>
import themeClassMixin from '../base/themeClassMixin.js'

export default {
  functional: true,
  mixins: [themeClassMixin],
  render (h) {
    return [
      h('div', {'class': 'mdc-notched-outline'},
        [
          h('svg', [
            h('path', {'class': 'mdc-notched-outline__path'})
          ])
        ]
      ),
      h('div', {'class': 'mdc-notched-outline__idle'})]
  }
}
</script>
