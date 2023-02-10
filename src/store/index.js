import { createStore } from 'vuex'
import { chunk } from 'lodash'
import { api } from '@/api'

const store = createStore({
  state () {
    return {
      all: localStorage.getItem('dogs') ? JSON.parse(localStorage.getItem('dogs')) : [],
    }
  },
  mutations: {
    SET_PUPS(state, pups) {
      state.all = pups;
      localStorage.setItem('dogs', JSON.stringify(state.all));
    },
  },
  actions: {
    async fetchPups({commit}) {
        const count = 100
        const chunks = chunk(Array.from(Array(count).keys()), 50)
        const promises = chunks.map(chunk => api.get(`breeds/image/random/50`))
        const results = await Promise.all(promises)
        const images = results.reduce((acc, res) => acc.concat(res.data.message), [])

        commit('SET_PUPS', images)
    }
  },
});

export default store;
