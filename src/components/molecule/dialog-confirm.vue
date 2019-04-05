<template>
  <div class="m-dialog" v-bind:class="{ show: $store.state.confirming }">
    <div class="m-dialog__inner">
      <div class="m-dialog__heading">投稿を完了しますか？</div>
      <div class="m-dialog__text--small">以下のことに注意するとより回答してもらいやすくなります。</div>
      <div class="m-dialog__text">
        ・あいまいな表現は避け具体的な内容になっているか
        <br>・冒頭で主題を提示しているか
        <br>・2択のどちらかで回答可能な内容になっているか
      </div>
      <div class="m-dialog__supp">
        投稿後の画面のURLは控えておきましょう。
        <br>URLがわからなくなった場合は投稿内容で検索してみてください。
      </div>
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
  methods: {
    post: function() {
      this.$store.commit("setLoading", true);
      this.$store.commit("setPostConfirming", false);
      this.$store.commit("setPosting", false);
      axios
        .post(
          `${ this.API_URL }/api/v1/articles`,
          {
            post: this.$store.state.post_data
          }
        )
        .then(response => {
          this.$router.push({
            name: "article",
            params: { id: response.data.id }
          });
          this.$store.commit("resetPostData");
          this.$store.commit("resetErrors");
          this.$store.commit("setShowToast", true);
        })
        // eslint-disable-next-line
        .catch(error => {
          this.$store.commit("setLoading", false);
        })
        .finally(()=>{
        });
    },
    cancel: function() {
      this.$store.commit("setPostConfirming", false);
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
