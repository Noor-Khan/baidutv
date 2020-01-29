<template>
  <div id="Product">
    <page-header />
    <header-description
      text="With Baidu control, you are in charge of thescreen time, and control the amount and types of videos your kids view. "
    />
    <kidd-app />
    <parent-app />
  </div>
</template>
<script>
import PageHeader from "../components/Header/Header";
import HeaderDescription from "../components/Header/HeaderDescription";
import KiddApp from "../components/Product/KiddApp";
import ParentApp from "../components/Product/ParentApp";
export default {
  components: {
    PageHeader,
    HeaderDescription,
    KiddApp,
    ParentApp
  }
};
</script>
<style lang="scss" scoped>
</style>