const state = {
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
    iconToggle: {
      text: 'IconToggle',
      route: '/iconToggle',
      icon: 'code'
    },
    textfield: {
      text: 'Textfield',
      route: '/textfield',
      icon: 'code'
    }
  }
}

const getters = {
  getDrawerListItems (state) {
    return state.drawerListItems
  }
}

const mutations = {

}

const actions = {

}

export default { state, getters, mutations, actions }
