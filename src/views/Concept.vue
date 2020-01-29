<template>
  <div id="Concept">
    <page-header />
    <header-description
      text="Baidu TV allows you to limit the screen time of your kids by providing them
with a tablet applications that has your kid’s tablet “run out of battery”
whenever you need them to stop watching."
    />
    <control-screen-time />
    <perfect-excuse />
    <super-charging />
  </div>
</template>
<script>
import PageHeader from "../components/Header/Header";
import HeaderDescription from "../components/Header/HeaderDescription";
import ControlScreenTime from "../components/Concept/ControlScreenTime";
import PerfectExcuse from "../components/Concept/PerfectExcuse";
import SuperCharging from "../components/Concept/SuperCharging";
export default {
  components: {
    PageHeader,
    HeaderDescription,
    ControlScreenTime,
    PerfectExcuse,
    SuperCharging
  }
};
</script>
<style lang="scss" scoped>
</style>