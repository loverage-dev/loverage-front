import Vue from 'vue'
import App from './App.vue'
import jQuery from 'jquery'
import router from "./router";

// -----  jQuery -------------
global.jquery = jQuery
global.$ = jQuery
window.$ = window.jQuery = require('jquery')


// -----  SASS -------------
require('@/sass/style.scss')

// -----  Vue -------------
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
