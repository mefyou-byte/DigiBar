<template>
<div class="container">
  <div class="spinner" v-if="spinner">
    <md-progress-spinner class="md-accent" :md-diameter="50" md-mode="indeterminate" :md-stroke="3"></md-progress-spinner>
  </div>
   <md-empty-state
    v-if="orders.length === 0 && !spinner"
    class="md-accent"
    md-icon="trending_down"
    md-label="Drunkness is declining"
    md-description="There are no more pending orders!">
  </md-empty-state>
  <div class="md-layout md-gutter">
    <div class="md-layout-item" v-for="order in orders" v-bind:key="order.id">
      <md-card>
       <div v-bind:class=" {overlay: order.beingRemoved }" v-if="order.beingRemoved" >
           <md-progress-spinner class="md-accent" :md-diameter="50" md-mode="indeterminate" :md-stroke="4"></md-progress-spinner>
       </div>

        <md-card-header>
          <md-card-media>
            <img v-bind:src="'/static/'+order.drink.img" v-bind:alt="order.drink.name">
          </md-card-media>
          <md-card-header-text>
            <div class="md-title">{{order.drink.name}}</div>
            <div class="md-subhead">{{order.name}}</div>
          </md-card-header-text>
        </md-card-header>
        <md-button class="md-accent" v-on:click="onAfgeleverd(order)" v-bind:disabled="order.beingRemoved || !order.hasPermission" style="font-size: .7rem">
          <input id="ontvangen" type="checkbox" v-bind:disabled="!order.hasPermission"/>
          <label for="ontvangen">Ontvangen</label>
          </md-button>
      </md-card>
    </div>
  </div>
  </div>
</template>

<script>
  import userService from '@/data/UserService';
  import orderService from '@/data/OrderService';
  import drinkService from '@/data/DrinkService';

  export default {
    data() {
      return {
        orders: [],
        spinner: true,
        pollingId: null
      }
    },
    methods: {
      refreshOrders() {
        return orderService.read()
          .then(orders => orders.filter(order => !order.afgeleverd))
          .then(orders => this.orders = orders.map(order => {
            return {
              id: order.id,
              name: order.name,
              beingRemoved: false,
              hasPermission: this.doesUserHavePermission(order),
              drink: drinkService.findById(order.drinkId)};}))
          .then(() => this.spinner = false);
      },
      onAfgeleverd(order) {
        if(order.hasPermission) {
          order.beingRemoved = true;
          orderService.afgeleverd(order.id)
            .then(() => this.refreshOrders());
        }
      },
      doesUserHavePermission(order) {
        let user = userService.getUser();
        return user === order.name || user === "admin";
      }
    },
    created() {
      this.refreshOrders();
    },
    mounted() {
      let refreshAndschedule = () => {
        this.refreshOrders()
          .then(() => this.pollingId = setTimeout(refreshAndschedule, 15000));
      };
      this.pollingId = setTimeout(refreshAndschedule, 15000);
    },
    beforeDestroy() {
      clearTimeout(this.pollingId);
    }
  }
</script>

<style lang="scss" scoped>

.container {
 padding: 5vw;
}
  .md-layout {
    flex-direction: column;

    .md-layout-item {
      margin-top: .5rem;
      margin-bottom: .5rem;
      position: relative;
    }
  }

  .md-card-header {
    padding: .5rem;
  }

  .md-card-media {
    text-align: center;
    margin-left: 0;
    margin-right: .5rem;

    img {
      height: inherit;
      max-width: 100%;
      width: auto;
    }
  }

  .md-button {
    position: absolute;
    bottom: 0;
    right: 0;
  }

  .spinner {
    text-align: center;
  }

.overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 4;
    overflow: hidden;
    background: rgba(0,0,0,.15);
    transition: .35s cubic-bezier(.4,0,.2,1);
    transition-property: opacity;
    will-change: opacity;

    .md-progress-spinner {
      position: absolute;
      z-index: 10;
      top: 25%;
      left: 45%;
    }
}

</style>

