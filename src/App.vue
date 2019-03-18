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
    <!-- <Toast/> -->
  </div>
</template>

<script>
import GlobalHeader from "./components/organism/global-header.vue";
import QuestionPostForm from "./components/organism/question-post-form.vue";
import GlobalFooter from "./components/organism/global-footer.vue";
import Loading from "./components/molecule/loading.vue";
import DialogConfirm from "./components/molecule/dialog-confirm.vue";
import DialogCancel from "./components/molecule/dialog-cancel.vue";
// import Toast from "./components/atom/toast.vue";
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
    // Toast,
    QuestionPostFormPopup
  }}
</script>

<style></style>
