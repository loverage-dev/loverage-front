<template>
  <div class="o-question-post-bottom-area">
    <div class="o-question-post-bottom-area__inner">
      <h3 class="o-question-post-bottom-area__heading">
        <span>相談してみる</span>
      </h3>
      <p class="o-question-post-bottom-area__desc">2択で回答可能な
        <br class="u-sp-tablet-d">恋愛に関する相談を投稿してみましょう。
      </p>
      <form action 
        class="m-question-post-form" 
        v-on:submit.prevent="onSubmit" 
        v-on:change="validate">
        <div class="m-question-post-form__block">
          <div class="m-contents-textarea">
            <div class="textarea-wrapper">
              <textarea
                class="a-textarea"
                name="contents"
                placeholder="質問内容を入力してください"
                v-bind:value="$store.getters.inputValues.content"
                v-on:input="updateInputValue($event, 'content')"
                v-bind:class="{ has_error: hasError_content}"
              ></textarea>
              <input class="image-post" type="file" name="image">
            </div>
            <!-- <input
              v-model="$store.state.post_input.tag_list"
              class="a-input"
              type="text"
              name="hashtag"
              placeholder="#ハッシュタグ"
              autocomplete="on"
            > -->
          </div>
        </div>
        <div class="m-question-post-form__block">
          <div class="m-question-post-form__heading">回答の2択（未入力の場合はアリ/ナシになります。）</div>
          <input
            class="a-input option1"
            type="text"
            name="option1"
            placeholder="選択肢1"
            autocomplete="on"
            v-bind:value="$store.getters.inputValues.opt1"
            v-on:input="updateInputValue($event, 'opt1')"
          >
          <input
            class="a-input option2"
            type="text"
            name="option2"
            placeholder="選択肢2"
            autocomplete="on"
            v-bind:value="$store.getters.inputValues.opt2"
            v-on:input="updateInputValue($event, 'opt2')"
          >
          <div class="m-question-post-form__heading">あなたの性別・年代</div>
          <div class="selectbox-wrapper gender">
            <select
              class="a-selectbox"
              name="gender"
              v-bind:value="$store.getters.inputValues.sex"
              v-on:input="updateInputValue($event, 'sex')"
              v-bind:class="{ has_error: hasError_sex}"
              >
              <option value=""></option>
              <option value="f">女性</option>
              <option value="m">男性</option>
              <option value="o">どちらでもない</option>
            </select>
          </div>
          <div class="selectbox-wrapper selectbox-wrapper--green age">
            <select
              class="a-selectbox"
              name="age"
              v-bind:value="$store.getters.inputValues.age"
              v-on:input="updateInputValue($event, 'age')"
              v-bind:class="{ has_error: hasError_age}"
              >
              <option value=""></option>
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
          <input
            class="submit"
            type="submit"
            value="投稿する"
              v-bind:disabled="!canPost"
              v-bind:class="{ disable_btn: !canPost}">
        </div>
      </form>
        <br class="u-sp-tablet-d">
        <div
          class="message_error"
          v-for="(error_message,index) in error_messages()"
          v-bind:key="index"
        >{{ error_message }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuestionPostForm",
  computed: {
    hasError_content: function(){
      if(this.$store.state.post_input.content == ""){
        return true
      }else{
        return false
      }
    },
    hasError_sex: function(){
      if(this.$store.state.post_input.sex == ""){
        return true
      }else{
        return false
      }
    },
    hasError_age: function(){
      if(this.$store.state.post_input.age == ""){
        return true
      }else{
        return false
      }
    },
    canPost: function(){
      if (
          this.$store.state.post_input.content != "" &&
          this.$store.state.post_input.age != "" &&
          this.$store.state.post_input.sex != ""
        ){
          return true
        }else{
          return false
        }
    }
  },
  props: {},
  components: {},
  methods: {
    updateInputValue(event, item_key) {
      this.$store.dispatch('doUpdateInputValue', { key: item_key, value: event.target.value })
    },
    onSubmit: function(){
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
        this.$store.dispatch('doUpdateInputValue', { key: 'isChanged', value: false })
      }else{
        this.$store.dispatch('doUpdateInputValue', { key: 'isChanged', value: true })
      }
    },
    error_messages: function() {
      let err_list = [];

      if (this.$store.state.post_input.isChanged) {
        if (this.$store.state.post_input.content == "") {
          err_list.push("×質問内容を入力してください。");
        }
        if (
          this.$store.state.post_input.sex == "" &&
          this.$store.state.post_input.age != ""
        ) {
          err_list.push("×性別を選択してください。");
        }
        if (
          this.$store.state.post_input.sex != "" &&
          this.$store.state.post_input.age == ""
        ) {
          err_list.push("×年代を選択してください。");
        }
        if (
          this.$store.state.post_input.sex == "" &&
          this.$store.state.post_input.age == ""
        ) {
          err_list.push("×性別・年代を選択してください。");
        }
      }
      return err_list;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.message_error {
  text-align: center;
  color:red;
}
.has_error {
  background-color: rgb(255, 80, 80, 0.1)
}
input.disable_btn{
  background-color: rgba(0, 0, 0, 0.308);
  /* color: rgba(0, 0, 0, 0.315); */
}
</style>
