<template>
    <div>
        <img v-if="age == 'e_10s' && sex == 'f'" src="@/images/temp/f_e_10s.png" alt>
        <img v-if="age == 'e_20s' && sex == 'f'" src="@/images/temp/f_e_20s.png" alt>
        <img v-if="age == 'e_30s' && sex == 'f'" src="@/images/temp/f_e_30s.png" alt>
        <img v-if="age == 'e_40s' && sex == 'f'" src="@/images/temp/f_e_40s.png" alt>
        <img v-if="age == 'e_50s' && sex == 'f'" src="@/images/temp/f_e_50s.png" alt>
        <img v-if="age == 'e_60s' && sex == 'f'" src="@/images/temp/f_e_60s.png" alt>
        <img v-if="age == 'l_10s' && sex == 'f'" src="@/images/temp/f_l_10s.png" alt>
        <img v-if="age == 'l_20s' && sex == 'f'" src="@/images/temp/f_l_20s.png" alt>
        <img v-if="age == 'l_30s' && sex == 'f'" src="@/images/temp/f_l_30s.png" alt>
        <img v-if="age == 'l_40s' && sex == 'f'" src="@/images/temp/f_l_40s.png" alt>
        <img v-if="age == 'l_50s' && sex == 'f'" src="@/images/temp/f_l_50s.png" alt>
        <img v-if="age == 'l_60s' && sex == 'f'" src="@/images/temp/f_l_60s.png" alt>
        <img v-if="age == 'e_10s' && sex == 'm'" src="@/images/temp/m_e_10s.png" alt>
        <img v-if="age == 'e_20s' && sex == 'm'" src="@/images/temp/m_e_20s.png" alt>
        <img v-if="age == 'e_30s' && sex == 'm'" src="@/images/temp/m_e_30s.png" alt>
        <img v-if="age == 'e_40s' && sex == 'm'" src="@/images/temp/m_e_40s.png" alt>
        <img v-if="age == 'e_50s' && sex == 'm'" src="@/images/temp/m_e_50s.png" alt>
        <img v-if="age == 'e_60s' && sex == 'm'" src="@/images/temp/m_e_60s.png" alt>
        <img v-if="age == 'l_10s' && sex == 'm'" src="@/images/temp/m_l_10s.png" alt>
        <img v-if="age == 'l_20s' && sex == 'm'" src="@/images/temp/m_l_20s.png" alt>
        <img v-if="age == 'l_30s' && sex == 'm'" src="@/images/temp/m_l_30s.png" alt>
        <img v-if="age == 'l_40s' && sex == 'm'" src="@/images/temp/m_l_40s.png" alt>
        <img v-if="age == 'l_50s' && sex == 'm'" src="@/images/temp/m_l_50s.png" alt>
        <img v-if="age == 'l_60s' && sex == 'm'" src="@/images/temp/m_l_60s.png" alt>
        <img v-if="age == 'e_10s' && sex == 'o'" src="@/images/temp/o_e_10s.png" alt>
        <img v-if="age == 'e_20s' && sex == 'o'" src="@/images/temp/o_e_20s.png" alt>
        <img v-if="age == 'e_30s' && sex == 'o'" src="@/images/temp/o_e_30s.png" alt>
        <img v-if="age == 'e_40s' && sex == 'o'" src="@/images/temp/o_e_40s.png" alt>
        <img v-if="age == 'e_50s' && sex == 'o'" src="@/images/temp/o_e_50s.png" alt>
        <img v-if="age == 'e_60s' && sex == 'o'" src="@/images/temp/o_e_60s.png" alt>
        <img v-if="age == 'l_10s' && sex == 'o'" src="@/images/temp/o_l_10s.png" alt>
        <img v-if="age == 'l_20s' && sex == 'o'" src="@/images/temp/o_l_20s.png" alt>
        <img v-if="age == 'l_30s' && sex == 'o'" src="@/images/temp/o_l_30s.png" alt>
        <img v-if="age == 'l_40s' && sex == 'o'" src="@/images/temp/o_l_40s.png" alt>
        <img v-if="age == 'l_50s' && sex == 'o'" src="@/images/temp/o_l_50s.png" alt>
        <img v-if="age == 'l_60s' && sex == 'o'" src="@/images/temp/o_l_60s.png" alt>
    </div>
 </template>

<script>
export default {
  name: "IconEyeCatching",
  props: {
    sex:{
      type:[String],
      default: ""
    },
    age:{
      type:[String],
      default: ""
    }
  },
  components: {}
};
</script>

<style></style>
