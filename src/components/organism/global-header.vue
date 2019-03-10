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
        <a href class="post">相談する</a>
        <button class="search-btn">
          <IconSearch/>
        </button>

        <div class="o-global-header__sp-search-area m-search-area">
          <form class="m-search-box" action v-on:submit.prevent="onSubmit(sp_search_word)">
            <div class="m-search-box__inner">
              <div class="m-search-box__box">
                <input type="search" class="m-search-box__input" v-model="sp_search_word">
                <a href class="m-search-box__delete">
                  <IconClose/>
                </a>
                <a href class="m-search-box__delete">
                  <IconClose/>
                </a>
              </div>
              <div class="m-search-box__cancel">
                <a href>キャンセル</a>
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
            <IconSearch width="15px" height="15px"/>
          </div>
          <form class="form" v-on:submit.prevent="onSubmit(pc_search_word)">
            <input class="input" type="text" placeholder="みんなの相談から検索" v-model="pc_search_word">
            <input class="submit" type="submit" value="検索">
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
      sp_search_word: ""
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
      global.$(".m-search-box__cancel").click()
    }
  },
  mounted: function() {
    // ----- scroll -------------
    const scrollHandler = (function() {
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

    // scrollの処理入れる？
    global.$(function() {
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

      // .o-global-header__function内の.postをクリックしたら、.o-question-post-popupのdisplay: noneをはずす
      global
        .$(".o-global-header__function")
        .find(".post")
        .on("click", function(event) {
          event.preventDefault();
          global.$(".o-question-post-popup").css("display", "block");
          scrollHandler.freeze();
          return false;
        });

      // 下記をクリックしたとき .o-question-post-popup をdisplay: none; にする
      //    .o-question-post-popup > .a-popup-header__close
      //    .o-question-post-popup > .a-popup-header__back
      function closeQuestionPostPopup(event) {
        event.preventDefault();
        global.$(".o-question-post-popup").css("display", "none");
        scrollHandler.allow();
        return false;
      }

      global
        .$(".o-question-post-popup")
        .find(".a-popup-header__close")
        .on("click", closeQuestionPostPopup);
      global
        .$(".o-question-post-popup")
        .find(".a-popup-header__back")
        .on("click", closeQuestionPostPopup);

      // .search-btn をクリックしたら.o-global-header__sp-search-areaのdisplay: none;を取る
      global.$(".search-btn").on("click", function(event) {
        event.preventDefault();
        global.$(".o-global-header__sp-search-area").css("display", "block");
        scrollHandler.freezeAll();
        return false;
      });

      // .m-search-box__cancelをクリックしたら.o-global-header__sp-search-areaをdisplay: none;
      global.$(".m-search-box__cancel").on("click", function(event) {
        event.preventDefault();
        global.$(".o-global-header__sp-search-area").css("display", "none");
        scrollHandler.allowAll();
        return false;
      });
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
