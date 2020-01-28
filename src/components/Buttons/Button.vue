<template>
  <v-btn
    v-if="btnClass === 'register'"
    :href="link"
    :color="btnClass"
    :rounded="true"
    class="px-12 py-6"
    :class="`btn-${btnClass}`"
    style="text-decoration:none;"
  >{{ text }}</v-btn>
  <v-btn
    :disabled="disabled"
    v-else
    :href="link"
    :color="btnClass"
    :rounded="true"
    class="px-12 py-7"
    :class="`btn-${btnClass}`"
    style="text-decoration:none;"
  >{{ text }}</v-btn>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    link: {
      type: String,
      default: "#"
    },
    btnClass: {
      type: String,
      default: "#5733FF"
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style lang="scss" scoped>
.btn-register {
  width: 160px !important;
  font-size: 16px !important;
  background-color: #5733ff !important;
  color: #fff !important;
  box-shadow: 1px 1px 7px #8873eb80;
}
</style>