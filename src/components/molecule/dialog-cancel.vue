<template>
  <div class="m-dialog" v-bind:class="{ show: $store.state.deleting }">
    <div class="m-dialog__inner">
      <div class="m-dialog__heading">この投稿を破棄しますか？</div>
      <div class="m-dialog__btn-area">
        <a class="m-dialog__btn m-dialog__btn--dont" @click="cancel">キャンセル</a>
        <a class="m-dialog__btn m-dialog__btn--do" @click="del">破棄する</a>
      </div>
    </div>
  </div>
  <!--  -->
</template>

<script>
export default {
  name: "DialogCancel",
  props: {},
  components: {},
  methods: {
    cancel: function(){
      this.$store.commit("setDeleteConfirming", false);
    },
    del: function(){
      this.$store.commit("setDeleteConfirming", false);
      this.$store.commit("resetPostData")
      this.$store.commit("setPosting", false);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .show{
    display: block;
  }
  </style>
