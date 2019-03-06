<template>
  <div class="m-dialog">
    <div class="m-dialog__inner">
      <div class="m-dialog__heading">この投稿を破棄しますか？</div>
      <div class="m-dialog__btn-area">
        <a href class="m-dialog__btn m-dialog__btn--dont">キャンセル</a>
        <a href class="m-dialog__btn m-dialog__btn--do">破棄する</a>
      </div>
    </div>
  </div>
  <!--  -->
</template>

<script>
export default {
  name: "DialogCancel",
  props: {},
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
