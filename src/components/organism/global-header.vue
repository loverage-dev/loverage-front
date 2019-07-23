<template>
  <header class="o-global-header">
    <div class="o-global-header__inner">
      <div class="o-global-header__id">
        <router-link to="/">
          <a href class="logo">
            <IconLoverage />
          </a>
        </router-link>
        <p class="description">
          <span class="sclae">2択の恋愛相談コミュニティ ラベレージ</span>
          <IconLoverageMini />
        </p>
      </div>
      <div class="o-global-header__function">
        <button
          class="personal-btn personal-btn--pc touch-out-side"
          v-bind:class="{ 'is-active': $store.getters.showHistory }"
          @click="toggleHistory"
        >
          <svg
            class="touch-out-side"
            width="18px"
            height="21px"
            viewBox="0 0 18 21"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <!-- Generator: Sketch 51.3 (57544) - http://www.bohemiancoding.com/sketch -->
            <desc>Created with Sketch.</desc>
            <defs />
            <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g
                id="header-sp--posted"
                transform="translate(-283.000000, -43.000000)"
                fill="#343434"
                fill-rule="nonzero"
              >
                <path
                  d="M290.15005,54.4459318 C287.881983,53.6757241 286.25,51.5284471 286.25,49 C286.25,45.8243627 288.824363,43.25 292,43.25 C295.175637,43.25 297.75,45.8243627 297.75,49 C297.75,51.5284471 296.118017,53.6757241 293.84995,54.4459318 C297.793967,55.2948376 300.75,58.8022096 300.75,63 C300.75,63.4142136 300.414214,63.75 300,63.75 C299.585786,63.75 299.25,63.4142136 299.25,63 C299.25,58.9959356 296.004064,55.75 292,55.75 C287.995936,55.75 284.75,58.9959356 284.75,63 C284.75,63.4142136 284.414214,63.75 284,63.75 C283.585786,63.75 283.25,63.4142136 283.25,63 C283.25,58.8022096 286.206033,55.2948376 290.15005,54.4459318 Z M292,53.25 C294.34721,53.25 296.25,51.3472102 296.25,49 C296.25,46.6527898 294.34721,44.75 292,44.75 C289.65279,44.75 287.75,46.6527898 287.75,49 C287.75,51.3472102 289.65279,53.25 292,53.25 Z"
                  id="Combined-Shape"
                />
              </g>
            </g>
          </svg>
        </button>

        <a class="post change-pointer" @click="openForm">相談する</a>
        <button class="search-btn" @click="toggleSearchArea">
          <IconSearch />
        </button>
        <div class="o-global-header__sp-search-area m-search-area show" v-if="isSearch">
          <form class="m-search-box" action v-on:submit.prevent="onSubmit(sp_search_word)">
            <div class="m-search-box__inner">
              <div class="m-search-box__box">
                <input
                  type="search"
                  class="m-search-box__input"
                  v-model="sp_search_word"
                  ref="txtSearch"
                />
                <a href class="m-search-box__delete">
                  <IconClose />
                </a>
                <a href class="m-search-box__delete">
                  <IconClose />
                </a>
              </div>
              <div class="m-search-box__cancel">
                <a @click="toggleSearchArea">キャンセル</a>
              </div>
            </div>
            <div class="m-search-box__suggest">
              <ul class="list">
                <li class="item">
                  <a href>彼氏 浮気</a>
                </li>
                <li class="item">
                  <a href>彼氏 クズ</a>
                </li>
                <li class="item">
                  <a href>彼氏 イケメン</a>
                </li>
                <li class="item">
                  <a href>彼女 浮気</a>
                </li>
              </ul>
            </div>
          </form>
        </div>

        <div class="o-global-header__pc-search-area">
          <div class="icon">
            <IconSearch width="15px" height="15px" color="#343434" />
          </div>
          <form class="form" v-on:submit.prevent="onSubmit(pc_search_word)">
            <input class="input" type="text" placeholder="みんなの相談から検索" v-model="pc_search_word" />
            <input class="submit change-pointer" type="submit" value="検索" />
            <ul class="suggestion">
              <li class="suggestion__item">
                <a href>彼氏 浮気</a>
              </li>
              <li class="suggestion__item">
                <a href>彼氏 クズ</a>
              </li>
              <li class="suggestion__item">
                <a href>彼氏 イケメン</a>
              </li>
              <li class="suggestion__item">
                <a href>彼女 浮気</a>
              </li>
            </ul>
          </form>
        </div>

        <button
          class="personal-btn personal-btn--sp touch-out-side"
          v-bind:class="{ 'is-active': $store.getters.showHistory }"
          v-on:click.stop="toggleHistory"
        >
          <svg
            class="touch-out-side"
            width="18px"
            height="21px"
            viewBox="0 0 18 21"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <!-- Generator: Sketch 51.3 (57544) - http://www.bohemiancoding.com/sketch -->
            <desc>Created with Sketch.</desc>
            <defs />
            <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g
                id="header-sp--posted"
                transform="translate(-283.000000, -43.000000)"
                fill="#343434"
                fill-rule="nonzero"
              >
                <path
                  d="M290.15005,54.4459318 C287.881983,53.6757241 286.25,51.5284471 286.25,49 C286.25,45.8243627 288.824363,43.25 292,43.25 C295.175637,43.25 297.75,45.8243627 297.75,49 C297.75,51.5284471 296.118017,53.6757241 293.84995,54.4459318 C297.793967,55.2948376 300.75,58.8022096 300.75,63 C300.75,63.4142136 300.414214,63.75 300,63.75 C299.585786,63.75 299.25,63.4142136 299.25,63 C299.25,58.9959356 296.004064,55.75 292,55.75 C287.995936,55.75 284.75,58.9959356 284.75,63 C284.75,63.4142136 284.414214,63.75 284,63.75 C283.585786,63.75 283.25,63.4142136 283.25,63 C283.25,58.8022096 286.206033,55.2948376 290.15005,54.4459318 Z M292,53.25 C294.34721,53.25 296.25,51.3472102 296.25,49 C296.25,46.6527898 294.34721,44.75 292,44.75 C289.65279,44.75 287.75,46.6527898 287.75,49 C287.75,51.3472102 289.65279,53.25 292,53.25 Z"
                  id="Combined-Shape"
                />
              </g>
            </g>
          </svg>
        </button>
        <div v-click-outside="vcoConfig">
          <HistoryBox v-if="$store.getters.showHistory" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import IconLoverage from "../icon/icon-loverage.vue";
import IconLoverageMini from "../icon/icon-loverage-mini.vue";
import IconSearch from "../icon/icon-search.vue";
import IconClose from "../icon/icon-close.vue";
import HistoryBox from "../molecule/history-box.vue";

export default {
  name: "GlobalHeader",
  data: function() {
    return {
      pc_search_word: "",
      sp_search_word: "",
      isSearch: false,
      vcoConfig: {
        handler: this.onClickOutSide,
        middleware: this.middleware,
        events: ['dblclick', 'click', 'touchend'],
        isActive: true
      }
    }
  },
  props: {
    // msg: String
  },
  components: {
    IconLoverage,
    IconLoverageMini,
    IconSearch,
    IconClose,
    HistoryBox
  },
  methods: {
    onClickOutSide () {
      this.closeHistory();
    },
    middleware (event) {
       return event.target.className.baseVal !== 'touch-out-side'
    },
    onSubmit: function(word) {
      let w = word.trim();
      if (w.startsWith("#")) {
        let tag = w.slice(1);
        this.$router.push({
          name: "category-detail",
          query: { tag: tag }
        });
      } else {
        this.$router.push({
          name: "category-detail",
          query: { keyword: w }
        });
      }
      this.pc_search_word = "";
      this.sp_search_word = "";
      this.isSearch = false;
    },
    openForm: function() {
      this.$store.commit("setPosting", true);
    },
    toggleSearchArea: function() {
      if (this.isSearch == true) {
        this.isSearch = false;
      } else {
        this.isSearch = true;
        this.$nextTick(() => this.$refs.txtSearch.focus());
      }
    },
    toggleHistory: function() {
      this.$store.state.showHistory
        ? this.$store.commit("setShowHistory", false)
        : this.$store.commit("setShowHistory", true);
    },
    closeHistory: function() {
      this.$store.commit("setShowHistory", false);
    }
  },
  mounted: function() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.show {
  display: block;
}
.change-pointer {
  cursor: hand;
  cursor: pointer;
}
</style>
