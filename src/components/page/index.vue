<template>
  <div class="t-contents">
    <PageIndexGiganticLayout/>
    <PageIndex1RowLayout/>
    <PageIndex2BlockLayout/>
    <PageIndex2ColmnLayoutAStyle/>
    <PageIndexGiganticLayoutSP/>
    <PageIndexCardListLayout/>
    <PageIndex2ColmnLayoutBStyle/>
    <PageIndexShowcaseStyle/>
    <PageIndexToAbout/>
  </div>
</template>

<script>
import PageIndexGiganticLayout from "./index-gigantic-layout.vue";
import PageIndex1RowLayout from "./index-1row-layout.vue";
import PageIndex2BlockLayout from "./index-2block-layout.vue";
import PageIndex2ColmnLayoutAStyle from "./index-2colmn-layout-a-style.vue";
import PageIndexGiganticLayoutSP from "./index-gigantic-layout-sp.vue";
import PageIndexCardListLayout from "./index-cardlist-layout.vue";
import PageIndex2ColmnLayoutBStyle from "./index-2colmn-layout-b-style.vue";
import PageIndexShowcaseStyle from "./index-showcase-layout.vue";
import PageIndexToAbout from "./index-to-about.vue";
import axios from 'axios'

export default {
  name: "PageIndex",
  props: {},
  components: {
    PageIndexGiganticLayout,
    PageIndex1RowLayout,
    PageIndex2BlockLayout,
    PageIndex2ColmnLayoutAStyle,
    PageIndexGiganticLayoutSP,
    PageIndexCardListLayout,
    PageIndex2ColmnLayoutBStyle,
    PageIndexShowcaseStyle,
    PageIndexToAbout
  },
  created: function () {
    this.$store.commit("setLoading", true);
    axios.get('https://whispering-anchorage-57506.herokuapp.com/api/v1/overview')
      .then(response => {
        this.$store.commit("setTopFeatureSpecial", response.data.top_featured.articles[0])
        this.$store.commit("setTopFeatureNormal", response.data.top_featured.articles.slice(1))
        this.$store.commit("setWomensTopic", response.data.big_futured_for_f)
        this.$store.commit("setMensTopic", response.data.big_futured_for_m)
        this.$store.commit("setRankingView", response.data.rankings_view.articles);
        this.$store.commit("setLatest", response.data.latest.articles);
        this.$store.commit("setFeatured", response.data.featured.articles);
        this.$store.commit("setFeaturedSP", response.data.featured.articles[0])
        this.$store.commit("setHotTopic", response.data.hot_topic.articles)
        this.$store.commit("setEditorsPick", response.data.editors_picks.articles)
        this.$store.commit("setOthers1", response.data.others_1.articles)
        this.$store.commit("setOthers2", response.data.others_2.articles)
      })
      .finally(()=>{
          this.$store.commit("setLoading", false)
        }
      )
  },
  mounted: function(){
    global.$("body").addClass("p-index")
  },
  destroyed: function(){
    global.$("body").removeClass("p-index")
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
