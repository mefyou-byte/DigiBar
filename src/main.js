import "babel-core/register"
import 'babel-polyfill'

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import { MdCard, MdButton, MdRipple, MdBottomBar, MdDialog, MdTabs, MdIcon, MdField, MdProgress, MdEmptyState } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import './theme.scss'


Vue.use(MdButton)
Vue.use(MdCard)
Vue.use(MdRipple)
Vue.use(MdBottomBar)
Vue.use(MdDialog)
Vue.use(MdTabs)
Vue.use(MdIcon)
Vue.use(MdField)
Vue.use(MdProgress)
Vue.use(MdEmptyState)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
