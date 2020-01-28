<template>
  <v-app>
    <div id="app">
      <base-layout />
    </div>
  </v-app>
</template>
<script>
import baseLayout from "./Layout/BaseLayout";
export default {
  components: {
    baseLayout
  }
};
</script>

<style lang="scss">
.theme--light.v-application {
  background-color: #fff !important;
}
#app {
  font-family: "Nunito Sans", "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: red !important;

    &.router-link-exact-active {
      color: red;
    }
  }
}
</style>
