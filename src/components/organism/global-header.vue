<template>
  <header class="o-global-header">
    <div class="o-global-header__inner">
      <div class="o-global-header__id">
        <router-link to="/">
          <a href class="logo">
            <IconLoverage/>
          </a>
        </router-link>
        <p class="description">
          <span class="sclae">2択の恋愛相談コミュニティ ラベレージ</span>
          <IconLoverageMini/>
        </p>
      </div>
      <div class="o-global-header__function">
        <a class="post change-pointer" @click="openForm">相談する</a>
        <button class="search-btn" @click="toggleSearchArea">
          <IconSearch/>
        </button>
        <div class="o-global-header__sp-search-area m-search-area show" v-if="isSearch">
          <form class="m-search-box" action v-on:submit.prevent="onSubmit(sp_search_word)">
            <div class="m-search-box__inner">
              <div class="m-search-box__box">
                <input type="search" class="m-search-box__input" v-model="sp_search_word" ref="txtSearch">
                <a href class="m-search-box__delete">
                  <IconClose/>
                </a>
                <a href class="m-search-box__delete">
                  <IconClose/>
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
            <IconSearch width="15px" height="15px" color="#343434"/>
          </div>
          <form class="form" v-on:submit.prevent="onSubmit(pc_search_word)">
            <input class="input" type="text" placeholder="みんなの相談から検索" v-model="pc_search_word">
            <input class="submit change-pointer" type="submit" value="検索">
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
      </div>
    </div>
  </header>
</template>

<script>
import IconLoverage from "../icon/icon-loverage.vue";
import IconLoverageMini from "../icon/icon-loverage-mini.vue";
import IconSearch from "../icon/icon-search.vue";
import IconClose from "../icon/icon-close.vue";

export default {
  name: "GlobalHeader",
  data: function() {
    return {
      pc_search_word: "",
      sp_search_word: "",
      isSearch: false
    };
  },
  props: {
    // msg: String
  },
  components: {
    IconLoverage,
    IconLoverageMini,
    IconSearch,
    IconClose
  },
  methods: {
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
      this.pc_search_word = ""
      this.sp_search_word = ""
      this.isSearch = false
    },
    openForm: function(){
      this.$store.commit("setPosting", true);
    },
    toggleSearchArea: function(){
      if(this.isSearch == true){
        this.isSearch = false
      }else{
        this.isSearch = true
        this.$nextTick(() => this.$refs.txtSearch.focus())
      }
    }
  },
  mounted: function() {
  
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.show{
  display: block;
}
.change-pointer{
  cursor: hand;
  cursor:pointer;
}
</style>
