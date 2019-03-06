<template>
  <div class="o-question-post-bottom-area">
      <div class="o-question-post-bottom-area__inner">
        <h3 class="o-question-post-bottom-area__heading"><span>相談してみる</span></h3>
        <p class="o-question-post-bottom-area__desc">2択で回答可能な<br class="u-sp-tablet-d">恋愛に関する相談を投稿してみましょう。</p>
        <form action="" class="m-question-post-form">
          <div class="m-question-post-form__block">
            <div class="m-contents-textarea">
              <div class="textarea-wrapper">
                <textarea class="a-textarea" name="contents" placeholder="質問内容を入力してください"></textarea>
                <input class="image-post" type="file" name="image">
              </div>
              <input class="a-input" type="text" name="hashtag" placeholder="#ハッシュタグ" autocomplete="on" />
            </div>
          </div>
          <div class="m-question-post-form__block">
            <div class="m-question-post-form__heading">回答の2択（未入力の場合はアリ/ナシになります。）</div><input class="a-input option1"
              type="text" name="option1" placeholder="選択肢1" autocomplete="on" />
            <input class="a-input option2" type="text" name="option2" placeholder="選択肢2" autocomplete="on" />
            <div class="m-question-post-form__heading">あなたの性別・年代</div>
            <div class="selectbox-wrapper gender">
              <select class="a-selectbox" name="gender">
                <option value="woman">女性</option>
                <option value="man">男性</option>
                <option value="other">どちらでもない</option>
              </select>
            </div>
            <div class="selectbox-wrapper selectbox-wrapper--green age">
              <select class="a-selectbox" name="age">
                <option value="early10">10代前半</option>
                <option value="late10">10代後半</option>
                <option value="early20">20代前半</option>
                <option value="late20">20代後半</option>
                <option value="early30">30代前半</option>
                <option value="late30">30代後半</option>
                <option value="early40">40代前半</option>
                <option value="late40">40代後半</option>
                <option value="early50">50代前半</option>
                <option value="late50">50代後半</option>
                <option value="early60">60代前半</option>
                <option value="late60">60代後半</option>
              </select>
            </div>
            <p class="m-question-post-form__terms"><router-link to="/terms"><a href="">利用規約</a></router-link>に同意して</p>
            <input class="submit" type="submit" value="投稿する">
          </div>
        </form>
      </div>
    </div>
</template>

<script>
export default {
  name: "QuestionPostForm",
  props: {},
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
