<template>
  <div class="main" id="app">
    <HomePage />
  </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import store from './store';
import HomePage from './components/HomePage.vue';

Vue.use(VueAxios, axios);

export default {
  name: 'app',
  components: {
    HomePage,
  },
  store,
};
</script>

<style>
html, body {
  height: 100%;
  margin: 0;
}

body {
  display: flex;
}

.main {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  align-items: center;
  color: #2c3e50;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  padding: 0 50px;
}
</style>
