<template>
  <div>
    <!-- ↓↓デフォルト画像の定義 -->
        <!-- ↓↓デフォルト画像の定義 -->
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_10s' && sex == 'f'" src="@/images/temp/f_e_10s.png" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_20s' && sex == 'f' && fileNo == 1" src="@/images/temp/f_e_20s_1.png" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_20s' && sex == 'f' && fileNo == 2" src="@/images/temp/f_e_20s_2.png" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_20s' && sex == 'f' && fileNo == 3" src="@/images/temp/f_e_20s_3.png" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_20s' && sex == 'f' && fileNo == 4" src="@/images/temp/f_e_20s_4.png" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_20s' && sex == 'f' && fileNo == 5" src="@/images/temp/f_e_20s_5.png" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_20s' && sex == 'f' && fileNo == 6" src="@/images/temp/f_e_20s_6.png" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_20s' && sex == 'f' && fileNo == 7" src="@/images/temp/f_e_20s_7.png" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_20s' && sex == 'f' && fileNo == 8" src="@/images/temp/f_e_20s_8.png" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_30s' && sex == 'f'" src="@/images/temp/f_e_30s.png" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_40s' && sex == 'f'" src="@/images/temp/f_e_40s.png" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_50s' && sex == 'f'" src="@/images/temp/f_e_50s.png" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_60s' && sex == 'f'" src="@/images/temp/f_e_60s.png" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_10s' && sex == 'f'" src="@/images/temp/f_l_10s.png" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_20s' && sex == 'f' && fileNo == 1" src="@/images/temp/f_l_20s_1.png" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_20s' && sex == 'f' && fileNo == 2" src="@/images/temp/f_l_20s_2.png" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_20s' && sex == 'f' && fileNo == 3" src="@/images/temp/f_l_20s_3.png" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_20s' && sex == 'f' && fileNo == 4" src="@/images/temp/f_l_20s_4.png" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_20s' && sex == 'f' && fileNo == 5" src="@/images/temp/f_l_20s_5.png" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_20s' && sex == 'f' && fileNo == 6" src="@/images/temp/f_l_20s_6.png" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_20s' && sex == 'f' && fileNo == 7" src="@/images/temp/f_l_20s_6.png" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_20s' && sex == 'f' && fileNo == 8" src="@/images/temp/f_l_20s_6.png" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_30s' && sex == 'f'" src="@/images/temp/f_l_30s.png" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_40s' && sex == 'f'" src="@/images/temp/f_l_40s.png" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_50s' && sex == 'f'" src="@/images/temp/f_l_50s.png" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_60s' && sex == 'f'" src="@/images/temp/f_l_60s.png" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_10s' && sex == 'm'" src="@/images/temp/m_e_10s.png" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_20s' && sex == 'm' && fileNo == 1" src="@/images/temp/m_e_20s_1.png" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_20s' && sex == 'm' && fileNo == 2" src="@/images/temp/m_e_20s_2.png" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_20s' && sex == 'm' && fileNo == 3" src="@/images/temp/m_e_20s_3.png" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_20s' && sex == 'm' && fileNo == 4" src="@/images/temp/m_e_20s_4.png" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_20s' && sex == 'm' && fileNo == 5" src="@/images/temp/m_e_20s_5.png" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_20s' && sex == 'm' && fileNo == 6" src="@/images/temp/m_e_20s_6.png" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_20s' && sex == 'm' && fileNo == 7" src="@/images/temp/m_e_20s_6.png" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_20s' && sex == 'm' && fileNo == 8" src="@/images/temp/m_e_20s_6.png" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_30s' && sex == 'm'" src="@/images/temp/m_e_30s.png" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_40s' && sex == 'm'" src="@/images/temp/m_e_40s.png" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_50s' && sex == 'm'" src="@/images/temp/m_e_50s.png" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_60s' && sex == 'm'" src="@/images/temp/m_e_60s.png" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_10s' && sex == 'm'" src="@/images/temp/m_l_10s.png" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_20s' && sex == 'm' && fileNo == 1" src="@/images/temp/m_l_20s_1.png" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_20s' && sex == 'm' && fileNo == 2" src="@/images/temp/m_l_20s_2.png" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_20s' && sex == 'm' && fileNo == 3" src="@/images/temp/m_l_20s_3.png" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_20s' && sex == 'm' && fileNo == 4" src="@/images/temp/m_l_20s_4.png" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_20s' && sex == 'm' && fileNo == 5" src="@/images/temp/m_l_20s_5.png" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_20s' && sex == 'm' && fileNo == 6" src="@/images/temp/m_l_20s_6.png" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_20s' && sex == 'm' && fileNo == 7" src="@/images/temp/m_l_20s_6.png" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_20s' && sex == 'm' && fileNo == 8" src="@/images/temp/m_l_20s_6.png" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_30s' && sex == 'm'" src="@/images/temp/m_l_30s.png" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_40s' && sex == 'm'" src="@/images/temp/m_l_40s.png" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_50s' && sex == 'm'" src="@/images/temp/m_l_50s.png" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_60s' && sex == 'm'" src="@/images/temp/m_l_60s.png" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_10s' && sex == 'o'" src="@/images/temp/o_e_10s.png" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_20s' && sex == 'o'" src="@/images/temp/o_e_20s.png" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_30s' && sex == 'o'" src="@/images/temp/o_e_30s.png" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_40s' && sex == 'o'" src="@/images/temp/o_e_40s.png" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_50s' && sex == 'o'" src="@/images/temp/o_e_50s.png" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_60s' && sex == 'o'" src="@/images/temp/o_e_60s.png" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_10s' && sex == 'o'" src="@/images/temp/o_l_10s.png" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_20s' && sex == 'o'" src="@/images/temp/o_l_20s.png" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_30s' && sex == 'o'" src="@/images/temp/o_l_30s.png" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_40s' && sex == 'o'" src="@/images/temp/o_l_40s.png" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_50s' && sex == 'o'" src="@/images/temp/o_l_50s.png" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_60s' && sex == 'o'" src="@/images/temp/o_l_60s.png" alt>
    <!-- ↓↓タグ付き画像の定義 -->
    <img v-if="!isContentPage && user_img == '' && tag != '' && tag != null" src="@/images/temp/f_e_20s_happy.png" alt> <!-- 20代の女が友達と楽しそうにしてる -->
    <img v-if="isContentPage && user_img != ''" :src="user_img" alt>
  </div>
</template>

<script>
export default {
  name: "IconEyeCatching",
  props: {
    sex: {
      type: [String],
      default: ""
    },
    age: {
      type: [String],
      default: ""
    },
    tag: {
      type: [String],
      default: ""
    },
    user_img: {
      type: [String],
      default: ""
    },
    isContentPage: {
      type: [Boolean],
      default: false
    },
    fileNo: {
      type: [Number],
      default: 1
    }
  },
  components: {}
};
</script>

<style></style>
