<template>
  <div class="main" id="app">
    <HomePage />
    <NotificationsBar />
  </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import store from './store';
import HomePage from './components/HomePage.vue';
import NotificationsBar from './components/NotificationsBar.vue';

Vue.use(VueAxios, axios);

export default {
  name: 'app',
  components: {
    HomePage,
    NotificationsBar,
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
  background-image: linear-gradient(to top, #F2635C 25%, #C95686 50%, #49567F 75%, #2F4858 100%);
  background-position: 0px 0px;
  box-shadow: 5px 5px 10px rgba(255, 255, 255, .3);
  animation: animatedChange 40s linear infinite;
}

@keyframes animatedChange {
	from { background-position: 0 0; }
	to { background-position: 100% 100%; }
}
</style>
