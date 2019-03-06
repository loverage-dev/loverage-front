<template>
  <div class="m-dialog">
    <div class="m-dialog__inner">
      <div class="m-dialog__heading">投稿を完了しますか？</div>
      <div class="m-dialog__text--small">以下のことに注意するとより回答してもらいやすくなります。</div>
      <div class="m-dialog__text">・あいまいな表現は避け具体的な内容になっているか
        <br>・冒頭で主題を提示しているか
        <br>・2択のどちらかで回答可能な内容になっているか
      </div>
      <div class="m-dialog__supp">投稿後の画面のURLは控えておきましょう。
        <br>URLがわからなくなった場合は投稿内容で検索してみてください。
      </div>
      <div class="m-dialog__btn-area">
        <a href class="m-dialog__btn m-dialog__btn--dont">キャンセル</a>
        <a href class="m-dialog__btn m-dialog__btn--do">投稿する</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DialogConfirm",
  props: {},
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
