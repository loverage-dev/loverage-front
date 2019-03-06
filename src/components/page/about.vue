<template>
    <div class="t-contents">
    <PageTitle pageTitle="Loverageについて" pageDescription="" />
    <div class="t-contents__inner">
        <div class="t-contents__inner-block">
        <h2 class="a-heading">「Love」 + 「Average」 = 「Loverage」</h2>
        <p class="a-paragraph">
            日々の恋愛の中で「これって自分だけ？」と感じることはありませんか？<br>
            誰かに共感を求めたり、意見を聞きたくなる瞬間は誰にでもあるはず。<br>
            <br>
            Loverageは、そんなあなたの恋愛にまつわる相談事を、二択の質問形式で投稿することで、みんなの意見（平均値）を知ることができるサービスです。<br>
            <br>
            日々の些細な出来事から、性にまつわるプライベートなことまで、家族や友人にも言えないあなたの今の気持ちをお聞かせください。</p>
        <p class="p-about__signature">Loverage運営事務局</p>
        </div>
    </div>
    </div>
</template>

<script>
import PageTitle from "../organism/page-title.vue"

export default {
  name: "PageAbout",
  props: {},
  components: {
      PageTitle
  },
  mounted: function(){
    global.$("body").addClass("p-about")
  },
  destroyed: function(){
    global.$("body").removeClass("p-about")
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
