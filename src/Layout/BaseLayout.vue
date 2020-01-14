<template>
  <div>
    <navbar />
    <div class="base-layout">
      <router-view />
    </div>
  </div>
</template>
<script>
import Navbar from "../components/Navigation/Navbar";
export default {
  components: {
    Navbar
  }
};
</script>
<style lang="scss" scoped>
.base-layout {
  position: relative;
}
</style>