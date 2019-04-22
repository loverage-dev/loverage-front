<template>
  <div class="o-card-list--kv u-pc-d" v-if="$store.state.top_feature_normal">
    <div class="o-card-list--kv__inner">
      <ul class="list">
        <li class="item" v-for="article in $store.state.top_feature_normal" v-bind:key="article.id">
          <div class="m-card m-card--square">
            <div class="m-card__image">
              <div class="m-card__image-inner">
                <router-link :to="{ name: 'article', params: { id: article.id }}">
                  <IconEyeCatching
                    :age="article.user_age" 
                    :sex="article.user_sex"
                    :tag="article.img_tag"
                    :fileNo="getRandomNo()"/>
                </router-link>
              </div>
            </div>
            <div class="m-card__text">
              <router-link :to="{ name: 'article', params: { id: article.id }}">
                <h2 class="m-card__title">{{ article.content }}</h2>
              </router-link>
              <div class="m-card-info">
                <IconSex
                  :to="{ name: 'category-detail', query: {  sex: article.user_sex, age: article.user_age  }}"
                  :user_age="article.user_age"
                  :sex="article.user_sex"
                />
                <div class="a-counter a-counter--withouttitle">
                  <!--?xml version="1.0" encoding="UTF-8"?-->
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
                  {{ article.votes_amount }} votes
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import IconSex from "../icon/icon-sex.vue";
import IconEyeCatching from "../icon/icon-eye-catching.vue";
export default {
  name: "PageIndex1RowLayout",
  props: {},
  components: {
    IconSex,
    IconEyeCatching
  },
  methods: {
      getRandomNo: function(){
      let num = 1 + Math.floor( Math.random() * 8 )
      return num
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
