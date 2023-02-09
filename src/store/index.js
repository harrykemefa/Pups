import { createStore } from 'vuex'
import { api } from '@/api'

const store = createStore({
  state () {
    return {
      all: localStorage.getItem('dogs') ? JSON.parse(localStorage.getItem('dogs')) : [],
    }
  },
  mutations: {
    // Mutations goes here
    SET_PUPS(state, pups) {
        state.all = pups
        localStorage.setItem('dogs', JSON.stringify(state.all))
      }
  },

  actions: {
     // Actions goes here
     async fetchPups({commit}) {
        const res = await api.get(`breeds/image/random/100`);

        if(res.data.status == "success"){
            commit('SET_PUPS', res.data.message)
        }
    },
    },


})

export default store;