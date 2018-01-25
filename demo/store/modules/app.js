import * as types from './mutation-types'

const state = {
  darkTheme: false,
  drawerListItems: {
    button: {
      text: 'Button',
      route: '/button',
      icon: 'code'
    },
    card: {
      text: 'Card',
      route: '/card',
      icon: 'code'
    },
    checkbox: {
      text: 'Checkbox',
      route: '/checkbox',
      icon: 'code'
    },
    dialog: {
      text: 'Dialog',
      route: '/dialog',
      icon: 'code'
    },
    drawer: {
      text: 'Drawer',
      route: '/drawer',
      icon: 'code'
    },
    elevation: {
      text: 'Elevation',
      route: '/elevation',
      icon: 'code'
    },
    fab: {
      text: 'Fab',
      route: '/fab',
      icon: 'code'
    },
    iconToggle: {
      text: 'IconToggle',
      route: '/iconToggle',
      icon: 'code'
    },
    linearProgress: {
      text: 'LinearProgress',
      route: '/linearProgress',
      icon: 'code'
    },
    radio: {
      text: 'Radio',
      route: '/radio',
      icon: 'code'
    },
    select: {
      text: 'Select',
      route: '/select',
      icon: 'code'
    },
    textfield: {
      text: 'Textfield',
      route: '/textfield',
      icon: 'code'
    }
  }
}

const getters = {}

const mutations = {
  TOGGLE_DARKTHEME (state) {
    state.darkTheme ? (state.darkTheme = false) : (state.darkTheme = true)
  }
}

const actions = {
  toggleDarkTheme (context) {
    context.commit(types.TOGGLE_DARKTHEME)
  }
}

export default { state, getters, mutations, actions }
