<template>
  <div>
    <v-btn
      v-if="btnClass === 'facebook'"
      :href="link"
      :color="btnClass"
      :class="`social-btn btn-${btnClass} justify-start`"
      style="text-decoration:none;"
    >
      <v-icon>mdi-facebook</v-icon>
      {{ text }}
    </v-btn>
    <v-btn
      v-if="btnClass ==='google'"
      :href="link"
      :color="btnClass"
      :class="`social-btn btn-${btnClass} justify-start`"
      style="text-decoration:none;"
    >
      <v-icon>mdi-google</v-icon>
      {{ text }}
    </v-btn>
  </div>
</template>
<script>
export default {
  props: {
    btnClass: String,
    text: String,
    link: String
  }
};
</script>
<style lang="scss">
.social-btn {
  width: 300px;
  height: unset !important;
  padding: 15px !important;
  margin-top: 10px;
  margin-bottom: 10px;
  .v-icon {
    font-size: 32px;
    color: #5733ff !important;
    margin-right: 15px;
  }
}
</style>