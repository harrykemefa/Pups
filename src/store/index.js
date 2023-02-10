import { createStore } from 'vuex'
import { chunk } from 'lodash'
import { api } from '@/api'

const store = createStore({
  state () {
    return {
      all: localStorage.getItem('dogs') ? JSON.parse(localStorage.getItem('dogs')) : [],
      breeds: localStorage.getItem('breeds') ? JSON.parse(localStorage.getItem('breeds')) : [],
      loading: false,
    }
  },
  mutations: {
    SET_PUPS(state, pups) {
      state.all = pups;
      localStorage.setItem('dogs', JSON.stringify(state.all));
    },

    SET_BREEDS(state, breeds) {
        state.breeds = breeds
        localStorage.setItem('breeds', JSON.stringify(state.breeds))
      },

    SET_LOADING(state, status) {
        state.loading = status
    }
  },
  actions: {
    async fetchPups({commit}) {
        commit('SET_LOADING', true)
        const count = 100
        const chunks = chunk(Array.from(Array(count).keys()), 50)
        const promises = chunks.map(chunk => api.get(`breeds/image/random/50`))
        const results = await Promise.all(promises)
        const images = results.reduce((acc, res) => acc.concat(res.data.message), [])

        commit('SET_PUPS', images)
        commit('SET_LOADING', false)
    },

    async fetchBreeds({commit}) {
        const res = await api.get(`breeds/list`);
        if(res.data.status == "success"){
          commit('SET_BREEDS', res.data.message)
        }
      },
  },
});

export default store;
