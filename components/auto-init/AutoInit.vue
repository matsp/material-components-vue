<script>
import autoInit from '@material/auto-init/index'
import * as constants from '@material/auto-init/constants'

import * as checkbox from '@material/checkbox/index'
import * as chips from '@material/chips/index'
import * as dataTable from '@material/data-table/index'
import * as dialog from '@material/dialog/index'
import * as drawer from '@material/drawer/index'
import * as floatingLabel from '@material/floating-label/index'
import * as formField from '@material/form-field/index'
import * as iconButton from '@material/icon-button/index'
import * as lineRipple from '@material/line-ripple/index'
import * as linearProgress from '@material/linear-progress/index'
import * as list from '@material/list/index'
import * as menuSurface from '@material/menu-surface/index'
import * as menu from '@material/menu/index'
import * as notchedOutline from '@material/notched-outline/index'
import * as radio from '@material/radio/index'
import * as ripple from '@material/ripple/index'
import * as select from '@material/select/index'
import * as slider from '@material/slider/index'
import * as snackbar from '@material/snackbar/index'
import * as switchControl from '@material/switch/index'
import * as tabBar from '@material/tab-bar/index'
import * as textField from '@material/textfield/index'
import * as topAppBar from '@material/top-app-bar/index'

import MDCComponent from '@material/base/component'

// Register all components
autoInit.register('MDCCheckbox', checkbox.MDCCheckbox)
autoInit.register('MDCChip', chips.MDCChip)
autoInit.register('MDCChipSet', chips.MDCChipSet)
autoInit.register('MDCDataTable', dataTable.MDCDataTable)
autoInit.register('MDCDialog', dialog.MDCDialog)
autoInit.register('MDCDrawer', drawer.MDCDrawer)
autoInit.register('MDCFloatingLabel', floatingLabel.MDCFloatingLabel)
autoInit.register('MDCFormField', formField.MDCFormField)
autoInit.register('MDCIconButtonToggle', iconButton.MDCIconButtonToggle)
autoInit.register('MDCLineRipple', lineRipple.MDCLineRipple)
autoInit.register('MDCLinearProgress', linearProgress.MDCLinearProgress)
autoInit.register('MDCList', list.MDCList)
autoInit.register('MDCMenu', menu.MDCMenu)
autoInit.register('MDCMenuSurface', menuSurface.MDCMenuSurface)
autoInit.register('MDCNotchedOutline', notchedOutline.MDCNotchedOutline)
autoInit.register('MDCRadio', radio.MDCRadio)
autoInit.register('MDCRipple', ripple.MDCRipple)
autoInit.register('MDCSelect', select.MDCSelect)
autoInit.register('MDCSlider', slider.MDCSlider)
autoInit.register('MDCSnackbar', snackbar.MDCSnackbar)
autoInit.register('MDCSwitch', switchControl.MDCSwitch)
autoInit.register('MDCTabBar', tabBar.MDCTabBar)
autoInit.register('MDCTextField', textField.MDCTextField)
autoInit.register('MDCTopAppBar', topAppBar.MDCTopAppBar)

const constructors = {
  MDCCheckbox: checkbox.MDCCheckbox,
  MDCChip: chips.MDCChip,
  MDCChipSet: chips.MDCChipSet,
  MDCDataTable: dataTable.MDCDataTable,
  MDCDialog: dialog.MDCDialog,
  MDCDrawer: drawer.MDCDrawer,
  MDCFloatingLabel: floatingLabel.MDCFloatingLabel,
  MDCFormField: formField.MDCFormField,
  MDCIconButtonToggle: iconButton.MDCIconButtonToggle,
  MDCLineRipple: lineRipple.MDCLineRipple,
  MDCLinearProgress: linearProgress.MDCLinearProgress,
  MDCList: list.MDCList,
  MDCMenu: menu.MDCMenu,
  MDCMenuSurface: menuSurface.MDCMenuSurface,
  MDCNotchedOutline: notchedOutline.MDCNotchedOutline,
  MDCRadio: radio.MDCRadio,
  MDCRipple: ripple.MDCRipple,
  MDCSelect: select.MDCSelect,
  MDCSlider: slider.MDCSlider,
  MDCSnackbar: snackbar.MDCSnackbar,
  MDCSwitch: switchControl.MDCSwitch,
  MDCTabBar: tabBar.MDCTabBar,
  MDCTextField: textField.MDCTextField,
  MDCTopAppBar: topAppBar.MDCTopAppBar
}

export default {
  inheritAttrs: false,
  data: function () {
    return {
      component: undefined
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.init()
    })
  },
  updated () {
    this.$nextTick(function () {
      this.init()
    })
  },
  methods: {
    init () {
      const node = this.$el
      if (this.component instanceof MDCComponent && this.component.root_ !== this.$el) {
        this.destroy()
      }
      if (
        this.component == null &&
        node instanceof HTMLElement &&
        node.hasAttribute(constants.strings.AUTO_INIT_ATTR) &&
        node.getAttribute(constants.strings.AUTO_INIT_STATE_ATTR) !== constants.strings.INITIALIZED_STATE) {
        // following codes are copied from https://github.com/material-components/material-components-web/blob/master/packages/mdc-auto-init/index.ts
        const ctorName = node.getAttribute(constants.strings.AUTO_INIT_ATTR)
        if (!ctorName) {
          throw new Error('(mdc-auto-init) Constructor name must be given.')
        }

        const Constructor = constructors[ctorName]
        if (typeof Constructor !== 'function') {
          throw new Error(
          `(mdc-auto-init) Could not find constructor in registry for ${ctorName}`)
        }

        const component = Constructor.attachTo(node)
        Object.defineProperty(node, ctorName, {
          configurable: true,
          enumerable: false,
          value: component,
          writable: false
        })

        this.component = component
        node.setAttribute(constants.strings.AUTO_INIT_STATE_ATTR, constants.strings.INITIALIZED_STATE)
        this.$emit('end', this.component)
      }
    },
    destroy () {
      if (this.component instanceof MDCComponent) {
        this.component.destroy()
        this.component = undefined
      }
    }
  },
  render: function (h) {
    const scopedSlot =
      this.$scopedSlots.default &&
      this.$scopedSlots.default({
        component: this.components
      })
    if (scopedSlot && scopedSlot.length > 0) {
      return scopedSlot[0]
    } else {
      this.destroy()
      return h()
    }
  }
}
</script>
