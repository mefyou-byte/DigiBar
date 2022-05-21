import Vue from 'vue'
import VueTouch from 'vue-touch';
Vue.use(VueTouch, {name: 'v-touch'});
VueTouch.config.swipe = {
  direction: 'horizontal'
};

export default {
  left(route, router) {
    switch(route) {
      case 'drinks':
        router.push('/orders');
        break;
      case 'orders':
        router.push('/faq');
        break;
      default:
        return null;
    }
  },
  right(route, router) {
    switch(route) {
      case 'faq':
        router.push('/orders');
        break;
      case 'orders':
        router.push('/');
        break;
      default:
        return null;
    }
  }
}
