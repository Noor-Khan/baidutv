<template>
  <header id="header">
    <b-navbar type="light">
      <b-container fluid>
        <b-navbar-brand href="#">Logo</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-5">
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item href="#">Concept</b-nav-item>
            <b-nav-item href="#">Product</b-nav-item>
            <b-nav-item href="#">Download</b-nav-item>
            <b-nav-item href="#">Company</b-nav-item>
            <b-nav-item href="#">Legal</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-button pill variant="primary" class="register-btn">Register</b-button>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </header>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import "../../assets/scss/index.scss";
header {
  &#header {
    position: fixed;
    padding: 0 40px;
    height: 65px;
    width: 100%;
    z-index: 9;
    background-color: $color-white;
    box-shadow: 0px 0px 8px #8080801a !important;
    nav.navbar {
      padding-top: 0;
      padding-bottom: 0;
      .navbar-nav {
        .nav-link {
          padding: 20px 15px;
          color: $color-black;
          border-bottom: 2px solid transparent;
          transition-duration: 0.3s;
          &:hover {
            color: $color-primary;
            border-bottom: 2px solid $color-primary;
          }
        }
      }
      .register-btn {
        padding: 7px 15px;
        width: 140px;
        border-color: $color-primary;
        background-color: $color-primary;
      }
    }
  }
}
</style>