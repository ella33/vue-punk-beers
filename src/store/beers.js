import Vue from 'vue';

const mapServerToLocalBeer = beer => ({
  id: beer.id,
  name: beer.name,
  dob: beer.first_brewed,
  tagline: beer.tagline,
  brewersTips: beer.brewers_tips,
  description: beer.description,
  ingredients: beer.ingredients.malt || beer.ingredients.hops,
  foodPairing: beer.food_pairing,
  imageUrl: beer.image_url || 'beer-bottle-shape.svg',
  config: [
    { label: 'Ph', value: beer.ph },
    { label: 'ABV', value: beer.abv },
    { label: 'IBU', value: beer.ibu },
    { label: 'EBC', value: beer.ebc },
    { label: 'SRM', value: beer.srm },
  ],
});

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
      context.commit('setCurrentBeer', mapServerToLocalBeer(response.data.pop()));
    },
  },
};

export default store;
