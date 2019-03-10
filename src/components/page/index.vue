<template>
  <div class="t-contents">
    <PageIndexGiganticLayout
      v-bind:article = "top_feature_special"
    />
    <PageIndex1RowLayout
      v-bind:articles = "top_feature_normal"
    />
    <PageIndex2BlockLayout
      v-bind:article_for_women = "womens_topic"
      v-bind:article_for_men = "mens_topic"
    />
    <PageIndex2ColmnLayoutAStyle
      v-bind:articles = "others_1"
      v-bind:articles_ranking_view = "ranking_view"
      v-bind:articles_latest = "latest"
    />
    <PageIndexGiganticLayoutSP
      v-bind:article = "featured_sp"/>
    <PageIndexCardListLayout
      v-bind:articles = "featured"/>
    <PageIndex2ColmnLayoutBStyle
      v-bind:articles = "others_2"
      v-bind:articles_hot = "hot_topic"/>
    <PageIndexShowcaseStyle
      v-bind:articles = "editors_pick"/>
    <PageIndexToAbout />

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
  data: function(){
    return {
      top_feature_special: null,
      top_feature_normal: null,
      womens_topic: null,
      mens_topic: null,
      others_1: null,
      ranking_view: null,
      latest: null,
      featured: null,
      featured_sp: null,
      others_2: null,
      hot_topic: null,
      editors_pick: null
    }
  },
  created: function () {
    this.$store.commit("setLoading", true);
    axios.get('http://localhost:4000/api/v1/overview')
      .then(response => {
        this.top_feature_special = response.data.top_featured.articles[0]
        this.top_feature_normal = response.data.top_featured.articles.slice(1)
        this.womens_topic = response.data.big_futured_for_f
        this.mens_topic = response.data.big_futured_for_m
        this.others_1 = response.data.others_1.articles
        this.ranking_view = response.data.rankings_view.articles
        this.latest = response.data.latest.articles
        this.featured = response.data.featured.articles
        this.featured_sp = response.data.featured.articles[0]
        this.others_2 = response.data.others_2.articles
        this.hot_topic = response.data.hot_topic.articles
        this.editors_pick = response.data.editors_picks.articles
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
