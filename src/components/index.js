import Button from './Button'
import Card from './Card'
import Checkbox from './Checkbox'
import Dialog from './Dialog'
import Fab from './Fab'
import FormField from './FormField'
import Icon from './Icon'
import IconToggle from './IconToggle'
import LayoutGrid from './LayoutGrid'
import List from './List'
import TemporaryDrawer from './Drawer'
import Textfield from './Textfield'
import Toolbar from './Toolbar'

const plugin = {
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
    vue.use(List)
    vue.use(TemporaryDrawer)
    vue.use(Textfield)
    vue.use(Toolbar)
  }
}

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
