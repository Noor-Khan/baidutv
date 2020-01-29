<template>
  <div>
    <b-navbar type="light">
      <b-container fluid>
        <b-navbar-brand href="#">Logo</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">Home</b-nav-item>
            <b-nav-item href="#">Concept</b-nav-item>
            <b-nav-item href="#">Product</b-nav-item>
            <b-nav-item href="#">Download</b-nav-item>
            <b-nav-item href="#">Company</b-nav-item>
            <b-nav-item href="#">Legal</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-button pill variant="primary">Register</b-button>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
@import "../../assets/scss/index.scss";
</style>