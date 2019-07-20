<template>
  <transition name="fade">
    <div
      class="a-toast show"
      v-if="$store.getters.toastingComment">
        コメントが投稿されました。
    </div>
  </transition>
</template>

<script>
export default {
  name: "ToastComment",
  props: {},
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.show {
  display: block;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity .75s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
