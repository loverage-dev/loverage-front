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
  created: function () {
    axios.get('http://localhost:4000/api/v1/overview')
      .then(response => {
        console.log(response.data) // mockData
        // console.log(response.status) // 200
      })
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
