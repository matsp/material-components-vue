import './styles.scss'

import Button from '../../dist/button'
import Icon from '../../dist/icon'
import Radio from '../../dist/radio'
import FormField from '../../dist/form-field'
import Checkbox from '../../dist/checkbox'
import Select from '../../dist/select'
import Card from '../../dist/card'
import Chips from '../../dist/chips'
import Textfield from '../../dist/textfield'
// import List from '../../dist/list'
import LayoutGrid from '../../dist/layout-grid'
import Typography from '../../dist/typography'

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  Vue.use(Button)
  Vue.use(Icon)
  Vue.use(Radio)
  Vue.use(Checkbox)
  Vue.use(FormField)
  Vue.use(Select)
  Vue.use(Card)
  Vue.use(Chips)
  Vue.use(Textfield)
  Vue.use(LayoutGrid)
  Vue.use(Typography)
}
