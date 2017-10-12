const state = {
  drawerListItems: {
    home: {
      text: 'Home',
      route: '/home',
      icon: 'home'
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
