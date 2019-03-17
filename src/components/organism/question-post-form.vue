<template>
  <div class="o-question-post-bottom-area">
    <div class="o-question-post-bottom-area__inner">
      <h3 class="o-question-post-bottom-area__heading">
        <span>相談してみる</span>
      </h3>
      <p class="o-question-post-bottom-area__desc">2択で回答可能な
        <br class="u-sp-tablet-d">恋愛に関する相談を投稿してみましょう。
      </p>
      <form action class="m-question-post-form" v-on:submit.prevent="onSubmit">
        <div class="m-question-post-form__block">
          <div class="m-contents-textarea">
            <div class="textarea-wrapper">
              <textarea
                v-model="$store.state.post_input.content"
                class="a-textarea"
                name="contents"
                placeholder="質問内容を入力してください"
              ></textarea>
              <input class="image-post" type="file" name="image">
            </div>
            <input
              v-model="$store.state.post_input.tag_list"
              class="a-input"
              type="text"
              name="hashtag"
              placeholder="#ハッシュタグ"
              autocomplete="on"
            >
          </div>
        </div>
        <div class="m-question-post-form__block">
          <div class="m-question-post-form__heading">回答の2択（未入力の場合はアリ/ナシになります。）</div>
          <input
            v-model="$store.state.post_input.opt1"
            class="a-input option1"
            type="text"
            name="option1"
            placeholder="選択肢1"
            autocomplete="on"
          >
          <input
            v-model="$store.state.post_input.opt2"
            class="a-input option2"
            type="text"
            name="option2"
            placeholder="選択肢2"
            autocomplete="on"
          >
          <div class="m-question-post-form__heading">あなたの性別・年代</div>
          <div class="selectbox-wrapper gender">
            <select class="a-selectbox" name="gender" v-model="$store.state.post_input.sex">
              <option value="f">女性</option>
              <option value="m">男性</option>
              <option value="o">どちらでもない</option>
            </select>
          </div>
          <div class="selectbox-wrapper selectbox-wrapper--green age">
            <select class="a-selectbox" name="age" v-model="$store.state.post_input.age">
              <option value="e_10s">10代前半</option>
              <option value="l_10s">10代後半</option>
              <option value="e_20s">20代前半</option>
              <option value="l_20s">20代後半</option>
              <option value="e_30s">30代前半</option>
              <option value="l_30s">30代後半</option>
              <option value="e_40s">40代前半</option>
              <option value="l_40s">40代後半</option>
              <option value="e_50s">50代前半</option>
              <option value="l_50s">50代後半</option>
              <option value="e_60s">60代前半</option>
              <option value="l_60s">60代後半</option>
            </select>
          </div>
          <p class="m-question-post-form__terms">
            <router-link to="/terms">利用規約</router-link>に同意して
          </p>
          <input class="submit" type="submit" value="投稿する">
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "QuestionPostForm",
  props: {},
  components: {},
  methods: {
    onSubmit: function(){
      // varidation

      // postData作成
      this.$store.commit("setPostData");
      // ダイアログ表示
      this.$store.commit("setPostConfirming", true);
    },
    validate: function(){
      if(
        this.$store.state.post_input.age === "" &&
        this.$store.state.post_input.sex === "" &&
        this.$store.state.post_input.content === "" &&
        this.$store.state.post_input.opt1 === "" &&
        this.$store.state.post_input.opt2 === "" &&
        this.$store.state.post_input.tag_list === ""
      ){
        this.$store.commit("setDeleteConfirming", false)
      }else{
        this.$store.commit("setDeleteConfirming", true)
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
