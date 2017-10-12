import Button from './Button'
import Card from './Card'
import Checkbox from './Checkbox'
import Dialog from './Dialog'
import Fab from './Fab'
import FormField from './FormField'
import Icon from './Icon'
import IconToggle from './IconToggle'
import LayoutGrid from './LayoutGrid'
import LinearProgress from './LinearProgress'
import List from './List'
import Menu from './Menu'
import Radio from './Radio'
import Select from './Select'
import Slider from './Slider'
import Snackbar from './Snackbar'
import Switch from './Switch'
import TemporaryDrawer from './Drawer'
import Textfield from './Textfield'
import Toolbar from './Toolbar'
import Typography from './Typography'

export default {
  install (vue) {
    vue.use(Button)
    vue.use(Card)
    vue.use(Checkbox)
    vue.use(Dialog)
    vue.use(Fab)
    vue.use(FormField)
    vue.use(Icon)
    vue.use(IconToggle)
    vue.use(LayoutGrid)
    vue.use(LinearProgress)
    vue.use(List)
    vue.use(Menu)
    vue.use(Radio)
    vue.use(Select)
    vue.use(Slider)
    vue.use(Snackbar)
    vue.use(Switch)
    vue.use(TemporaryDrawer)
    vue.use(Textfield)
    vue.use(Toolbar)
    vue.use(Typography)
  }
}
