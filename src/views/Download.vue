<template>
  <div id="Concept">
    <page-header />
    <header-description
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis fermentum neque arcu euismod mauris hendrerit cras."
    />
    <two-apps />
  </div>
</template>
<script>
import PageHeader from "../components/Header/Header";
import HeaderDescription from "../components/Header/HeaderDescription";
import TwoApps from "../components/Download/TwoApps";
export default {
  components: {
    PageHeader,
    HeaderDescription,
    TwoApps
  }
};
</script>
<style lang="scss" scoped>
</style>