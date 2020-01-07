import Vue from 'vue';

const store = {
  state: {
    currentBeer: {},
  },
  mutations: {
    setCurrentBeer(state, currentBeer) {
      state.currentBeer = currentBeer;
    },
  },
  actions: {
    async getRandomBeer(context) {
      const response = await Vue.axios.get('https://api.punkapi.com/v2/beers/random');
      context.commit('setCurrentBeer', response.data.pop());
    },
  },
};

export default store;
