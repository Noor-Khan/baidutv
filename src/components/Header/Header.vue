<template>
  <section id="PageHeader">
    <v-container>
      <v-row>
        <v-col col="12">
          <div class="header-heading">
            <h2>{{currentRouteName}}</h2>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
export default {
  props: {
    text: {
      type: String
    }
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    }
  }
};
</script>
<style lang="scss" scoped>
#PageHeader {
  background-image: url("../../assets/images/header-bg.png");
  background-size: cover;
  background-position: bottom;
  height: 320px;
  display: flex;
  align-items: center;
  margin-bottom: 5rem;
  .header-heading {
    margin-top: 2rem;
    h2 {
      color: #fff;
      font-size: 42px;
      font-weight: 600;
      letter-spacing: 1px;
    }
  }
}
</style>