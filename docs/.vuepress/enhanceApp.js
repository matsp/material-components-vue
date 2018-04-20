import './style.scss'

import Button from '../../dist/button'
import Icon from '../../dist/icon'

import LayoutGrid from '../../dist/layout-grid'
import Typography from '../../dist/typography'

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router // the router instance for the app
}) => {
  Vue.use(Button)
  Vue.use(Icon)
  Vue.use(LayoutGrid)
  Vue.use(Typography)
}
