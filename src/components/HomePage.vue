<template>
  <div :class="$style.beerWrapper" v-if="currentBeer.id">
    <div :class="$style.beerInfo">
      <h1 :class="$style.title">{{currentBeer.name}} ({{currentBeer.dob}})</h1>
      <span :class="[$style.pageSubtitle, $style.textSmall]">{{currentBeer.tagline}}</span>

      <section :class="$style.brewerTips">
        <span :class="$style.anchoredLabel">Brewer Tips</span>
        <div>{{currentBeer.brewersTips}}</div>
      </section>

      <p :class="$style.description">{{currentBeer.description}}</p>

      <section :class="$style.ingredients">
        <h2 :class="$style.subtitle">Ingredients</h2>
        <div :class="$style.details">
          <div v-for="item in currentBeer.ingredients" :key="item.name" :class="$style.centeredItem">
            <span>{{item.name}}</span>
            <span :class="$style.textSmall">{{item.amount.value}}/{{item.amount.unit}}</span>
          </div>
        </div>
      </section>

      <section :class="$style.foodPairing">
        <h2 :class="$style.subtitle">Food pairing</h2>
        <div :class="$style.details">
          <div v-for="item in currentBeer.foodPairing" :key="item" :class="$style.centeredItem">
            <span>{{item}}</span>
          </div>
        </div>
      </section>
    </div>

    <div>
      <img :src="currentBeer.imageUrl" :class="$style.beerPreview" />
      <div v-for="{ label, value } in currentBeer.config" :key="label" :class="$style.textSmall">
        <strong>{{label}}:</strong> {{value}}
      </div>
    </div>
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
    ...mapActions(['getRandomBeer']),
  },
};
</script>

<style module lang="scss">
section {
  margin: 30px 0;

  .subtitle {
    border-width: 0 0 3px 0;
    border-color: currentColor;
  }
}

.textSmall {
  font-size: 14px;
}

.beerWrapper {
  background-color: #fefefe;
  display: flex;
  padding: 20px;
  box-shadow: 8px 8px 30px #C3FCF1;
}

.beerInfo {
  width: 36em;
  padding-right: 25px;
}

.title {
  color: #f28e1c;
  margin-bottom: 0;
}

.pageSubtitle {
  color: #B9A89B;
}

.beerPreview {
  height: 500px;
}

.brewerTips {
  padding: 12px;
  background: #FFEACE;
  border-radius: 10px;
  position: relative;
}

.anchoredLabel {
  color: #f28e1c;
  border-radius: 10px;
  position: absolute;
  top: -16px;
  background: #fff;
  padding: 0 5px;
  border: 2px solid #FFEACE;
  left: 3px;
}

.ingredients {
  .subtitle {
    border-style: dotted;
    color: #00C26B;
  }
}

.details {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
  grid-auto-columns: 1fr;
}

.centeredItem {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.foodPairing {
  .subtitle {
    border-style: dashed;
    color: #C35355;
  }
}

.foodPairing {
  .centeredItem {
    border-image: repeating-linear-gradient(45deg, #FFEACE 10%, #FF8888 30%) 7;
    border-width: 7px;
    border-style: solid;
    padding: 5px;
  }
}
</style>
