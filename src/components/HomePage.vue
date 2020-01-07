<template>
  <div class="beer-wrapper" v-if="currentBeer.id">
    <div class="beer-info">
      <h1 class="title">{{currentBeer.name}} ({{currentBeer.first_brewed}})</h1>
      <span class="page-subtitle">{{currentBeer.tagline}}</span>

      <section class="brewer-tips">
        <span class="anchored-label">Brewer Tips</span>
        <div>{{currentBeer.brewers_tips}}</div>
      </section>

      <p class="description">{{currentBeer.description}}</p>

      <section class="ingredients">
        <h2 class="subtitle">Ingredients</h2>
        <div class="details">
          <div v-for="item in currentBeer.ingredients.malt" :key="item.name" class="item">
            <span class="name">{{item.name}}</span>
            <span class="amount">{{item.amount.value}}/{{item.amount.unit}}</span>
          </div>
        </div>
      </section>

      <section class="food-pairing">
        <h2 class="subtitle">Food pairing</h2>
      </section>
    </div>

    <img :src="currentBeer.image_url" class="beer-preview" />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'HomePage',
  props: {
    msg: String
  },
  mounted() {
    this.getRandomBeer();
  },
  computed: mapState({
    currentBeer: state => state.beers.currentBeer,
  }),
  methods: {
    ...mapActions({
      getRandomBeer: 'getRandomBeer',
    }),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section {
  margin: 30px 0;
}

section .subtitle {
  border-width: 0 0 3px 0;
  border-color: currentColor;
}

.beer-wrapper {
  display: flex;
}

.beer-info {
  width: 36em;
  padding: 0 25px;
}

.title {
  color: #f28e1c;
  margin-bottom: 0;
}

.page-subtitle {
  color: #B9A89B;
  font-size: 14px;
}

.beer-preview {
  height: 500px;
}

.brewer-tips {
  padding: 12px;
  background: #FFEACE;
  border-radius: 10px;
  position: relative;
}

.anchored-label {
  color: #f28e1c;
  border-radius: 10px;
  position: absolute;
  top: -16px;
  background: #fff;
  padding: 0 5px;
  border: 2px solid #FFEACE;
  left: 3px;
}

.ingredients .subtitle {
  border-style: dotted;
  color: #00C26B;
}

.details {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
  grid-auto-columns: 1fr;
}

.details .item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.item .amount {
  font-size: 14px;
}

.food-pairing .subtitle {
  border-style: dashed;
  color: #C35355;
}
</style>
