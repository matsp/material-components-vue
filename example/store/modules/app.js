const state = {
  drawerListItems: {
    home: {
      title: 'Home',
      route: '/home',
      icon: 'home'
    },
    card: {
      title: 'Card',
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
