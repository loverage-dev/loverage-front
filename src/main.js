import Vue from 'vue'
import App from './App.vue'
import jQuery from 'jquery'
import router from "./router";
import moment from 'moment';
import store from "./store";
import VueHead from 'vue-head'
import VueAnalytics from 'vue-analytics'
import gv from './mixins/grobalValiables'
import vClickOutside from 'v-click-outside'
// import './registerServiceWorker'

Vue.use(vClickOutside)
Vue.mixin(gv)    // mixinに登録

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
      return "その他"
    default:
      return value
  }
});
Vue.filter('format_datetime', function (value) {
  return moment(value).format('YYYY/MM/DD HH:mm')
}
);
Vue.filter('format_date', function (value) {
  return moment(value).format('YY/MM/DD')
}
);

// ----- scroll -------------
(function () {
  const targets = global.$(".t-wrapper");

  // Get suit scroll event
  const pcScrollEvent = (() => {
    if ("onwheel" in document) return "wheel";
    if ("onmousewheel" in document) return "mousewheel";
    return "DOMMouseScroll";
  })();

  const preventDefault = event => {
    event.preventDefault();
    return false;
  };

  // スクロールを無効化した時点でのスクロール位置を保持したい。
  // 有効化するときに必要になる。
  let scrollTop = 0;

  // スクロールを無効化
  const freeze = () => {
    scrollTop = global.$(window).scrollTop();
    targets.css({ position: "fixed" });
  };

  // ページ全体のスクロールを無効化する
  const freezeAll = () => {
    [pcScrollEvent, "touchmove"].forEach(event => {
      document.addEventListener(event, preventDefault, { passive: false });
    });
  };

  // スクロールを有効化
  const allow = () => {
    targets.css({ position: "" });
    global.$("html,body").scrollTop(scrollTop);
  };

  // ページ全体のスクロールを有効化
  const allowAll = () => {
    [pcScrollEvent, "touchmove"].forEach(event => {
      document.removeEventListener(event, preventDefault);
    });
  };

  return {
    freeze,
    freezeAll,
    allow,
    allowAll
  };
})();

global.$(function () {
  /***********************************
   * 全ページ共通
   ***********************************/

  // 25px以上スクロールされたら
  //   →.o-global-header に .is-scrolled を付与
  // 一番上までもどってきたら
  //   →.o-global-header から .is-scrolled を削除
  global.$(window).on("scroll", () => {
    const currentPageYOffset = window.pageYOffset;
    if (currentPageYOffset >= 25)
      global.$(".o-global-header").addClass("is-scrolled");
    if (currentPageYOffset <= 0)
      global.$(".o-global-header").removeClass("is-scrolled");
  });

});


// -----  VueHead ------------
Vue.use(VueHead, {
  separator: ' | '
})
// -----  Google Analytics ------------
if(process.env.NODE_ENV === 'production'){
  Vue.use(VueAnalytics, {
    id: 'UA-137031526-1',
    router
  })
}

// -----  Vue -------------
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
