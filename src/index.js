import Button from './components/Button'

import Card from './components/Card/Card'
import CardMediaItem from './components/Card/CardMediaItem'

import Checkbox from './components/Checkbox'

import Dialog from './components/Dialog'

import Fab from './components/Fab'

import FormField from './components/FormField'

import Icon from './components/Icon'
import IconToggle from './components/IconToggle'

import LayoutGrid from './components/LayoutGrid/LayoutGrid'
import LayoutGridCell from './components/LayoutGrid/LayoutGridCell'
import LayoutGridInner from './components/LayoutGrid/LayoutGridInner'

import List from './components/List/List'
import ListDivider from './components/List/ListDivider'
import ListGroup from './components/List/ListGroup'
import ListGroupDivider from './components/List/ListGroupDivider'
import ListGroupSubheader from './components/List/ListGroupSubheader'
import ListItem from './components/List/ListItem'

import TemporaryDrawer from './components/TemporaryDrawer'

import Textfield from './components/Textfield/Textfield'
import TextfieldHelptext from './components/Textfield/TextfieldHelptext'
import TextfieldMultiline from './components/Textfield/TextfieldMultiline'

import Toolbar from './components/Toolbar'

const components = {
  Button,
  Card,
  CardMediaItem,
  Checkbox,
  Dialog,
  Fab,
  FormField,
  Icon,
  IconToggle,
  LayoutGrid,
  LayoutGridCell,
  LayoutGridInner,
  List,
  ListDivider,
  ListGroup,
  ListGroupDivider,
  ListGroupSubheader,
  ListItem,
  TemporaryDrawer,
  Textfield,
  TextfieldHelptext,
  TextfieldMultiline,
  Toolbar
}

function plugin (Vue, opts = { prefix: 'MCV' }) {
  const { prefix } = opts
  const compNames = Object.keys(components)
  for (let i = 0; i < compNames.length; i++) {
    const name = compNames[i]
    Vue.component(`${prefix}-${name}`, components[name])
  }
}

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
