import Vue from 'vue';
import Vuex from 'vuex';
import beers from './beers';
import notifications from './notifications';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    beers,
    notifications,
  },
});