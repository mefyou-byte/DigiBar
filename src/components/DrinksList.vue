<template>
  <div id="list">
    <div class="md-layout md-gutter">
      <div class="md-layout-item md-size-25 md-small-size-33 md-xsmall-size-50" v-for="drink in drinks">
        <div class="drink-wrapper" @click="selectDrink(drink)">
          <div class="img-wrapper">
            <img class="drink-img" v-bind:src="'/static/'+ drink.img" v-bind:alt="drink.name"/>
          </div>
          <div class="drink-name">{{drink.name}}</div>
        </div>
      </div>
    </div>
    <order-modal v-if="showModal"
                 v-on:closed="closeModal"
                 v-bind:drink="currentDrink">
    </order-modal>
   
  </div>
</template>

<script>
  import drinkService from '@/data/DrinkService.vue';
  import Order from '@/components/OrderView.vue';

  export default {
    data() {
      return {
        showModal: false,
        currentDrink: null,
        drinks: drinkService.findAll()
      }
    },
    methods: {
      selectDrink(drink) {
        this.currentDrink = drink;
        this.showModal = true;
      },
      closeModal() {
        this.showModal = false;
        this.currentDrink = null;
      }
    },
    components: {
      'order-modal': Order
    }
  }
</script>

<style lang="scss" scoped>

  #list {
    padding: 5vw;
  }

  .md-layout-item {
    position: relative;
    height: 50vw;
    padding: 1em;

    .drink-wrapper {
      border-radius: 15%;
      border: .2rem solid #00796B;
      background-color: #00796B;
      height: 100%;
      font-size: .9rem;
      text-align: center;

      .img-wrapper {
        height: 80%;
        background-color: white;
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
      }

      .drink-img {
        padding-top: .3em;
        padding-bottom: .3em;
        border-radius: inherit;
        height: 100%;
      }

      .drink-name {
        color: white;
        padding-top: .4em;

      }
    }
  }

  .disclaimer {
    text-align: center;
    background-color: grey;
    margin-left: -5vw;
    margin-right: -5vw;
    margin-bottom: -5vw;
    padding: .5rem;
    color: #fff;
    font-weight: bold;
  }

  @media (min-width: 600px) {
    .md-layout-item {
      height: 33vw;

      .drink-wrapper {
        font-size: 1.5rem;

        .drink-name {
          padding-top: .55em;
        }
      }
    }
  }

  @media (min-width: 960px) {
    .md-layout-item {
      height: 25vw;
    }
  }

</style>
