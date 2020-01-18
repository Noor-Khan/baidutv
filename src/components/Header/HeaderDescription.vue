<template>
  <div id="HeaderDescription">
    <b-container>
      <b-row>
        <b-col md="6" offset-md="3">
          <h3 class="font-weight-bolder text-uppercase">{{ heading }}</h3>
          <p>{{text}}</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  props: {
    heading: {
      type: String
    },
    text: {
      type: String
    }
  }
};
</script>
<style lang="scss" scoped>
#HeaderDescription {
  padding: 40px 0;
}
</style>