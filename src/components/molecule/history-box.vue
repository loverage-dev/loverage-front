<template>
  <div class="o-history-box" v-click-outside="closeHistory">
    <h6 class="o-history-box__heading">あなたの相談履歴（最新5件）</h6>
    <ul class="o-history-box-list">
      <li
        class="o-history-box-list__item"
        v-for="history in myHistoryPosts"
        v-bind:key="history.post_id"
      >
        <a @click="toArticle(history.post_id)">
          <time class="date">{{ history.created_at|format_date }}</time>
          <div class="title">{{ history.title }}</div>
        </a>
      </li>
      <li class="o-history-box-list__item" v-if="myHistoryPosts.length == 0">
        <span>
          <div class="no-history">現在投稿されている記事はありません。</div>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import vClickOutside from 'v-click-outside'

export default {
  name: "HistoryBox",
  props: {},
  directives: {
    clickOutside: vClickOutside.directive
  },
  data() {
    return {
      myHistoryPosts: []
    };
  },
  mounted: function() {
    this.fetchLocalStrageData();
  },
  destroyed: function() {},
  components: {},
  methods: {
    fetchLocalStrageData: function() {
      if (!localStorage.getItem("history-post")) {
        localStorage.setItem("history-post", "[]");
      } else {
        this.myHistoryPosts = JSON.parse(localStorage.getItem("history-post"));
      }
    },
    closeHistory: function() {
      this.$store.commit("setShowHistory", false);
    },
    toArticle: function(id) {      
      this.closeHistory()
      this.$router.push({
        name: 'article',
        params: { id: id }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
