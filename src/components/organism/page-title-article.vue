<template>
  <div class="o-pagetitle o-pagetitle-article">
    <div class="o-pagetitle__inner">
      <div class="o-pagetitle__category" v-if="article.post.category != null">  
        <router-link
          class="a-label a-label--category"
          v-bind:to="{ name: 'category-detail', query: {  category: article.post.category }}">
          {{ article.post.category }}
        </router-link>
      </div>
      <h1 class="o-pagetitle__title">{{article.post.title}}</h1>
      <div class="m-card-info">
        <IconSex
          :to="{ name: 'category-detail', query: {  sex:  article.post.user_sex, age:  article.post.user_age  }}"
          :user_age="article.post.user_age"
          :sex="article.post.user_sex"
        />
        <div class="a-counter a-counter--withouttitle">
          <svg
            width="14px"
            height="14px"
            viewBox="0 0 14 14"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <!-- Generator: Sketch 51.2 (57519) - http://www.bohemiancoding.com/sketch -->
            <title>Combined Shape</title>
            <desc>Created with Sketch.</desc>
            <defs></defs>
            <g
              id="SP"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
              opacity="0.900000036"
            >
              <g id="トップ" transform="translate(-142.000000, -429.000000)" fill="#AAAAAA">
                <path
                  d="M150.811787,431.439026 C151.248604,430.995794 151.956748,430.995794 152.393565,431.439026 L156.050001,435.149154 C156.125469,435.225731 156.125469,435.349529 156.050001,435.426106 L152.332651,439.198043 C152.257363,439.274437 152.135176,439.274437 152.059708,439.198043 L148.403452,435.487914 C147.966635,435.044682 147.966635,434.325957 148.403452,433.882726 L150.811787,431.439026 Z M141.84255,432.040843 C142.279367,431.597612 142.98769,431.597612 143.424328,432.040843 L151.268891,440.000418 C151.344179,440.076994 151.344179,440.200975 151.268891,440.277369 L147.551541,444.049306 C147.476253,444.1257 147.353886,444.1257 147.278598,444.049306 L139.434215,436.089732 C138.997397,435.646318 138.997397,434.927775 139.434215,434.484544 L141.84255,432.040843 Z"
                  id="Combined-Shape"
                  transform="translate(147.606602, 437.606602) rotate(-315.000000) translate(-147.606602, -437.606602) "
                ></path>
              </g>
            </g>
          </svg>
          {{ article.post.ref_count }} views
        </div>
        <div class="a-date">{{ article.post.created_at|format_datetime }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import IconSex from "../icon/icon-sex.vue";
export default {
  name: "PageTitleArticle",
  props: {
    article: {
      type: [Object],
      default: null
    }
  },
  components: {
    IconSex
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
