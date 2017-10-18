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
