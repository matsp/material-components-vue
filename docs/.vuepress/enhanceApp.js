import './styles.scss'

import Button from '../../components/button'
import Icon from '../../components/icon'
import Radio from '../../components/radio'
import FormField from '../../components/form-field'
import Checkbox from '../../components/checkbox'
import Select from '../../components/select'
import Card from '../../components/card'
import Chips from '../../components/chips'
import Textfield from '../../components/textfield'
import FloatingLabel from '../../components/floating-label'
import LineRipple from '../../components/line-ripple'
import NotchedOutline from '../../components/notched-outline'
import List from '../../components/list'
import Menu from '../../components/menu'
import LayoutGrid from '../../components/layout-grid'
import Typography from '../../components/typography'
import Fab from '../../components/fab'
import IconButton from '../../components/icon-button'

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
  Vue.use(FloatingLabel)
  Vue.use(LineRipple)
  Vue.use(NotchedOutline)
  Vue.use(LayoutGrid)
  Vue.use(Typography)
  Vue.use(Fab)
  Vue.use(IconButton)
  Vue.use(List)
  Vue.use(Menu)
}
