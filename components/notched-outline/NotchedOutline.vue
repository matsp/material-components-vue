<script>
import { MDCNotchedOutline } from '@material/notched-outline'

import themeClassMixin from '../base/themeClassMixin.js'

export default {
  functional: true,
  mixins: [themeClassMixin],
  data () {
    return {
      mdcNotchedOutline: null
    }
  },
  mounted () {
    this.mdcNotchedOutline = MDCNotchedOutline.attachTo(this.$el)
  },
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
