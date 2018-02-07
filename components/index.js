import Button from './Button'
import Card from './Card'
import Checkbox from './Checkbox'
import Chips from './Chips'
import Dialog from './Dialog'
import Elevation from './Elevation'
import Fab from './Fab'
import FormField from './FormField'
import GridList from './GridList'
import Icon from './Icon'
import IconToggle from './IconToggle'
import LayoutGrid from './LayoutGrid'
import LinearProgress from './LinearProgress'
import LineRipple from './LineRipple'
import List from './List'
import Menu from './Menu'
import Radio from './Radio'
import Ripple from './Ripple'
import Select from './Select'
import Slider from './Slider'
import Snackbar from './Snackbar'
import Switch from './Switch'
import Tabs from './Tabs'
import TemporaryDrawer from './Drawer'
import Textfield from './Textfield'
import Theme from './Theme'
import Toolbar from './Toolbar'
import Typography from './Typography'

const plugin = {
  install (vue) {
    vue.use(Button)
    vue.use(Card)
    vue.use(Checkbox)
    vue.use(Chips)
    vue.use(Dialog)
    vue.use(Elevation)
    vue.use(Fab)
    vue.use(FormField)
    vue.use(GridList)
    vue.use(Icon)
    vue.use(IconToggle)
    vue.use(LayoutGrid)
    vue.use(LinearProgress)
    vue.use(LineRipple)
    vue.use(List)
    vue.use(Menu)
    vue.use(Radio)
    vue.use(Ripple)
    vue.use(Select)
    vue.use(Slider)
    vue.use(Snackbar)
    vue.use(Switch)
    vue.use(Tabs)
    vue.use(TemporaryDrawer)
    vue.use(Textfield)
    vue.use(Theme)
    vue.use(Toolbar)
    vue.use(Typography)
  }
}

export default plugin

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}
