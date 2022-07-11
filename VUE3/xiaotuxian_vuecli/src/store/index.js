import { createStore } from 'vuex'

// A模块
const moduleA = {
  state: {
    username: 'moduleA'
  },
  mutaions: {
    updateName (state) {
      state.username = 'modifyA'
    }
  },
  getters: {
    newName (state) {
      return state.username + '!!!'
    }
  }
}

const moduleB = {
  namespaced: true,
  state: {
    username: 'moduleB'
  },
  getters: {
    newName (state) {
      return state.username + '!!!'
    }
  },
  mutations: {
    updateName (state, info = 999) {
      state.username = info
    }
  },
  actions: {
    updateName (ctx) {
      setTimeout(() => {
        ctx.commit('updateName', 'cl')
      }, 1000)
    }
  }
}

export default createStore({
  modules: {
    moduleA,
    moduleB
  }
})

// import { createStore } from 'vuex'

// export default createStore({
//   state: {
//     username: 'ffcc'
//   },
//   getters: {
//     newName (state) {
//       return state.username + '999'
//     }
//   },
//   mutations: {
//     updateName (state, info = 999) {
//       state.username = info
//     }
//   },
//   actions: {
//     updateName (ctx) {
//       setTimeout(() => {
//         ctx.commit('updateName', 'cl')
//       }, 1000)
//     }
//   },
//   modules: {
//   }
// })
