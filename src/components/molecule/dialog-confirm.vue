<template>
  <div class="m-dialog" v-bind:class="{ show: $store.state.confirming }">
    <div class="m-dialog__inner">
      <div class="m-dialog__heading">投稿を完了しますか？</div>
      <div class="m-dialog__text--small">以下のことに注意するとより回答してもらいやすくなります。</div>
      <div class="m-dialog__text">
        ・あいまいな表現は避け具体的な内容になっているか
        <br />・冒頭で主題を提示しているか
        <br />・2択のどちらかで回答可能な内容になっているか
      </div>
      <!-- <div class="m-dialog__supp">
        投稿後の画面のURLは控えておきましょう。
        <br>URLがわからなくなった場合は投稿内容で検索してみてください。
      </div>-->
      <div class="m-dialog__btn-area">
        <a class="m-dialog__btn m-dialog__btn--dont change-pointer" @click="cancel">キャンセル</a>
        <a class="m-dialog__btn m-dialog__btn--do change-pointer" @click="post">投稿する</a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "DialogConfirm",
  props: {},
  components: {},
  data: function() {
    return {
      myHistoryPosts: []
    };
  },
  mounted: function() {
    this.fetchLocalStrageData();
  },
  methods: {
    post: function() {
      this.$store.commit("setLoading", true);
      this.$store.commit("setPostConfirming", false);
      this.$store.commit("setPosting", false);
      axios
        .post(`${this.API_URL}/api/v1/articles`, {
          post: this.$store.state.post_data
        })
        .then(response => {
          if(response.status == 201){
            let historyPost = {
              post_id: response.data.id,
              title: response.data.title,
              created_at: response.data.created_at
            }
            this.registerMyHistoryPosts(historyPost)
            this.$router.push({
              name: "article",
              params: { id: response.data.id }
            });
            this.$store.commit("resetPostData");
            this.$store.commit("resetErrors");
            this.$store.commit("setShowToast", true);
            if(process.env.NODE_ENV === 'production'){
              this.submitSlack(`${response.data.title} <https://www.loverage.jp/article/${response.data.id}|記事はこちら>`)
            }
          }
        })
        // eslint-disable-next-line
        .catch(error => {
          this.$store.commit("setLoading", false);
        })
        .finally(() => {});
    },
    cancel: function() {
      this.$store.commit("setPostConfirming", false);
    },
    fetchLocalStrageData: function() {
      if (!localStorage.getItem("history-post")) {
        localStorage.setItem("history-post", "[]");
      } else {
        this.myHistoryPosts = JSON.parse(localStorage.getItem("history-post"));
      }
    },
    registerMyHistoryPosts: function(data) {
      this.myHistoryPosts.unshift(data);  // 末尾へ追加
      const limitHistCount = 5;
      if(this.myHistoryPosts.length > limitHistCount){
        this.myHistoryPosts.pop()
      }
      let saveDataString = JSON.stringify(this.myHistoryPosts);
      localStorage.setItem("history-post", saveDataString);
    },
    submitSlack:function(text) {
      const url = "https://hooks.slack.com/services/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";
      const data = {
        text: text
      };

      const xml = new XMLHttpRequest();
      xml.open("POST", url, false);
      xml.setRequestHeader("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
      xml.send(`payload=${JSON.stringify(data)}`)
    }
  }
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
