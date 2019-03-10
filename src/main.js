import Vue from 'vue'
import App from './App.vue'
import jQuery from 'jquery'
import router from "./router";
import moment from 'moment';
import store from "./store";

// -----  jQuery -------------
global.jquery = jQuery
global.$ = jQuery
window.$ = window.jQuery = require('jquery')


// -----  SASS -------------
require('@/sass/style.scss')

// -----  Filters -----------
// 後に別ファイル化する
Vue.filter('translate_to_jp_age', function (value) {
  switch (value) {
    case "e_10s":
      return "10代前半"
    case "l_10s":
      return "10代後半"
    case "e_20s":
      return "20代前半"
    case "l_20s":
      return "20代後半"
    case "e_30s":
      return "30代前半"
    case "l_30s":
      return "30代後半"
    case "e_40s":
      return "40代前半"
    case "l_40s":
      return "40代後半"
    case "e_50s":
      return "50代前半"
    case "l_50s":
      return "50代後半"
    case "e_60s":
      return "60代前半"
    case "l_60s":
      return "60代後半"
    default:
      return value
  }
});
Vue.filter('translate_to_jp_age_simple', function (value) {
  switch (value) {
    case "10s":
      return "10代"
    case "20s":
      return "20代"
    case "30s":
      return "30代"
    case "40s":
      return "40代"
    case "50s":
      return "50代"
    case "60s":
      return "60代"
    default:
      return value
  }
});
Vue.filter('translate_to_jp_sex', function (value) {
  switch (value) {
    case "m":
      return "男性"
    case "f":
      return "女性"
    case "o":
      return "どちらでもない"
    default:
      return value
  }
});
Vue.filter('format_date', function (value) {
      return moment(value).format('YYYY/MM/DD HH:mm')
  }
);


// -----  Vue -------------
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
