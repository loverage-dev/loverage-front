<template>
  <div class="t-wrapper">
    <Loading/>
    <QuestionPostFormPopup />
    <GlobalHeader />
    <router-view></router-view>
    <QuestionPostForm />
    <GlobalFooter />
    <DialogConfirm />
    <DialogCancel/>
    <Toast/>
    <ToastComment/>
  </div>
</template>

<script>
import GlobalHeader from "./components/organism/global-header.vue";
import QuestionPostForm from "./components/organism/question-post-form.vue";
import GlobalFooter from "./components/organism/global-footer.vue";
import Loading from "./components/molecule/loading.vue";
import DialogConfirm from "./components/molecule/dialog-confirm.vue";
import DialogCancel from "./components/molecule/dialog-cancel.vue";
import Toast from "./components/atom/toast.vue";
import ToastComment from "./components/atom/toast-comment.vue";
import QuestionPostFormPopup from "./components/organism/question-post-form-popup.vue";

export default {
  name: "App",
  components: {
    GlobalHeader,
    QuestionPostForm,
    GlobalFooter,
    DialogConfirm,
    DialogCancel,
    Loading,
    Toast,
    ToastComment,
    QuestionPostFormPopup
  },
  watch: {
    "$store.state.showToast": function(showToast) {
      if (showToast) {
        this.$store.commit("setShowToast", false);
        setTimeout(()=>{
          this.$store.commit("setToasting", true);
          setTimeout(() => {
            this.$store.commit("setToasting", false);
          }, 2900);
        }, 700)
      }
    },

    "$store.state.showToastComment": function(showToast) {
      if (showToast) {
        this.$store.commit("setShowToastComment", false);
        setTimeout(()=>{
          this.$store.commit("setToastingComment", true);
          setTimeout(() => {
            this.$store.commit("setToastingComment", false);
          }, 2900);
        }, 700)
      }
    }
  }}
</script>

<style></style>
