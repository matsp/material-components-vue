import './styles.scss'

import Button from '../../components/button'
import IconButton from '../../components/icon-button'
import Card from '../../components/card'
import Chips from '../../components/chips'
import Radio from '../../components/radio'
import FormField from '../../components/form-field'
import Checkbox from '../../components/checkbox'
import LayoutGrid from '../../components/layout-grid'
import Typography from '../../components/typography'
import Icon from '../../components/icon'

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  Vue.use(Button)
  Vue.use(IconButton)
  Vue.use(Card)
  Vue.use(Radio)
  Vue.use(Checkbox)
  Vue.use(FormField)
  Vue.use(LayoutGrid)
  Vue.use(Typography)
  Vue.use(Icon)
  Vue.use(Chips)
}
