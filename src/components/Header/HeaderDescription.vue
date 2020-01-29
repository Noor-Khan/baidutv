<template>
  <div id="HeaderDescription">
    <v-container>
      <v-row>
        <v-col md="6" offset-md="3">
          <h3 class="font-weight-bolder text-uppercase">{{ heading }}</h3>
          <p>{{text}}</p>
        </v-col>
      </v-row>
    </v-container>
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