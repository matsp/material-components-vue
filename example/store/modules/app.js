const state = {
  drawerListItems: {
    home: {
      text: 'Home',
      route: '/home',
      icon: 'home'
    },
    card: {
      text: 'Card',
      route: '/card',
      icon: 'person'
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
