<template>
  <div class="o-question-post-bottom-area" v-show="!$store.getters.loading">
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
                v-bind:class="{ has_error: $store.getters.error_content}"
              ></textarea>
                <ResizableImageInput
                 class="image-post"
                 name="image"
                 :draw-image-args="drawImageArgs"
                  @resized="uploadProfileImage" />
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
          <p class="message_error">{{ $store.getters.error_content_msg }}</p>
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
            v-bind:class="{ has_error: $store.getters.error_options}"
          >
          <input
            class="a-input option2"
            type="text"
            name="option2"
            placeholder="選択肢2"
            autocomplete="on"
            v-bind:value="$store.getters.inputValues.opt2"
            v-on:input="updateInputValue($event, 'opt2')"
            v-bind:class="{ has_error: $store.getters.error_options}"
          >
          <p class="message_error">{{ $store.getters.error_options_msg }}</p>
          <div class="m-question-post-form__heading">あなたの性別・年代</div>
          <div class="selectbox-wrapper gender">
            <select
              class="a-selectbox"
              name="gender"
              v-bind:value="$store.getters.inputValues.sex"
              v-on:input="updateInputValue($event, 'sex')"
              v-bind:class="{ has_error: $store.getters.error_sex}"
              style="max-height:42.33px;min-height:42.33px;"
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
              v-bind:class="{ has_error: $store.getters.error_age}"
              style="max-height:42.33px;min-height:42.33px;"
              >
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
          <p class="message_error">{{ $store.getters.error_sex_age_msg }}</p>
          <p class="m-question-post-form__terms">
            <router-link to="/terms">利用規約</router-link>に同意して
          </p>
          <input
            class="submit change-pointer"
            type="submit"
            value="投稿する"
            v-bind:class="{ disable_btn: !$store.getters.canPost}">
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import ResizableImageInput from "../molecule/resizable-image-input.vue";

export default {
  name: "QuestionPostForm",
  props: {},
  components: {
    ResizableImageInput
  },
  methods: {
    async uploadProfileImage ({ base64 }) {
      this.$store.state.post_input.img_base64 = base64
    },
    drawImageArgs (image) {
      const maxSize = 330
      let sx = 0
      let sy = 0
      let imageWidth = image.width
      let imageHeight = image.height
      let dstWidth = imageWidth
      let dstHeight = imageHeight

      if(imageWidth > maxSize){
        dstWidth = maxSize
        dstHeight = imageHeight * (maxSize / imageWidth)
      }
      if(imageHeight > maxSize){
        dstWidth = imageWidth * (maxSize / imageHeight)
        dstHeight = maxSize
      }
      return [image, sx, sy, imageWidth, imageHeight, 0, 0, dstWidth, dstHeight]
    },
    updateInputValue(event, item_key) {
      this.$store.dispatch('doUpdateInputValue', { key: item_key, value: event.target.value })
    },
    onSubmit: function(){
      this.$store.dispatch('doChkErrors')
      if(this.$store.state.canPost){
        // postData作成
        this.$store.commit("setPostData");
        // ダイアログ表示
        this.$store.commit("setPostConfirming", true);
      }
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
      this.$store.dispatch('doChkCanPost')
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.message_error {
  color:red;
  font-size: 13px;
}
.has_error {
  border-color: red;
  border-width: 0.5px;
  background-color: rgb(255, 80, 80, 0.1)
}
input.disable_btn{
  background-color: rgba(0, 0, 0, 0.308);
  /* color: rgba(0, 0, 0, 0.315); */
}
.change-pointer{
  cursor: hand;
  cursor:pointer;
}
</style>
