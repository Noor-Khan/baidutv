<template>
  <div>
    <navbar />
    <v-content>
      <div class="base-layout">
        <router-view />
        <Callout />
        <Footer />
      </div>
    </v-content>
  </div>
</template>
<script>
import Navbar from "../components/Navigation/Navbar";
import Footer from "../components/Footer/Footer";
import Callout from "../components/Footer/Callout";
export default {
  components: {
    Navbar,
    Footer,
    Callout
  }
};
</script>
<style lang="scss" scoped>
.base-layout {
  position: relative;
}
</style>