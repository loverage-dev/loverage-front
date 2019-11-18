<template>
  <h6>
    <router-link  :to="to" class="a-label a-label--category">
      {{ category }}
    </router-link>
  </h6>
</template>

<script>
export default {
  name: "IconCategory",
  props: {
    width: {
      type: [String],
      default: "7px"
    },
    height: {
      type: [String],
      default: "13px"
    },
    category: {
      type: [String],
      default: ""
    },
    to: {
      type: [Object],
      default: null
    }
  },
  components: {}
};
</script>

<style scoped></style>
