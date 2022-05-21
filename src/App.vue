<template>
  <v-touch id="app" v-on:swipeleft="onSwipeLeft()" v-on:swiperight="onSwipeRight()" ref="app" tabindex="0">
    <!-- <img src="./assets/logo.png"> -->
     <md-tabs md-sync-route md-alignment="fixed">
        <md-tab md-label="Drinks" to="/drinks" id='tab_drinks'></md-tab>
        <md-tab md-label="Orders" to="/orders" id='tab_orders'></md-tab>
        <md-tab md-label="FAQ" to="/faq" id='tab_faq'></md-tab>
      </md-tabs>
      <!-- TODO optional : custom template for amount of orders?-->
    <router-view/>
  </v-touch>
</template>

<script>
  import swipe from '@/router/SwipeCommands.js';
  export default {
    name: 'App',
    data: () => ({

    }),
    methods: {
      onSwipeLeft() {
        swipe.left(this.$route.name, this.$router);
        this.$refs.app.focus();
        
      },
      onSwipeRight() {
        swipe.right(this.$route.name, this.$router);
      }
    }
  }

</script>

<style lang="scss">
  #app {
    background-color: rgba(233,233,233, 1);
    min-height: 100vh;
  }

  //krijg de material css die de foute highlight in de tab veroorzaakt niet overschreven dus gebruik deze css klass van vue-router als hook
  .md-button:not([disabled]):before {
    background-color: transparent !important;
}

</style>

