import { createStore } from 'vuex'
import { chunk } from 'lodash'
import { api } from '@/api'

const store = createStore({
  state () {
    return {
      all: localStorage.getItem('dogs') ? JSON.parse(localStorage.getItem('dogs')) : [],
      breeds: localStorage.getItem('breeds') ? JSON.parse(localStorage.getItem('breeds')) : [],
      isDataLoaded: localStorage.getItem('loaded') ? localStorage.getItem('loaded') : false,
      selectedBreed: null,
      loading: false,
      pupInfo: localStorage.getItem('info') ? JSON.parse(localStorage.getItem('info')) : null,
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

      SET_DATALOADED(state, status) {
        state.isDataLoaded = status
        localStorage.setItem('loaded', status)
      },


    SET_SELECTED_BREED(state, breed) {
        state.selectedBreed = breed
      },

      SET_SINGLE_PUP(state, pup) {
        state.pupInfo = pup
        localStorage.setItem('info', JSON.stringify(pup))
      },

    SET_LOADING(state, status) {
        state.loading = status
    },

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
        commit('SET_DATALOADED', true)
    },

     fetchSinglePup({ commit }, pup) {
        const urlParts = pup.split('/');
        const data = {
          image: pup,
          breed: urlParts[4],
        }
        commit('SET_SINGLE_PUP', data);
  
    },


    async fetchBreeds({commit}) {
        const res = await api.get(`breeds/list`);
        if(res.data.status == "success"){
          commit('SET_BREEDS', res.data.message)
        }
      },

      async fetchBreedDogs({ commit }, breed) {
        try {
            commit('SET_LOADING', true)
          const res = await api.get(`https://dog.ceo/api/breed/${breed}/images`);
          const data = res.data.message;
          commit('SET_SELECTED_BREED', data);
          commit('SET_LOADING', false)
        } catch (error) {
          console.error(error);
        }
      }
  },
});

export default store;
