<template>
  <header id="header">
    <b-navbar type="light" toggleable="lg">
      <b-navbar-brand href="#">Logo</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" @click="navIconChange">
        <b-icon-list v-if="this.navBtn"></b-icon-list>
        <b-icon-x v-else></b-icon-x>
      </b-navbar-toggle>

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
    </b-navbar>
  </header>
</template>
<script>
export default {
  data() {
    return {
      navBtn: true
    };
  },
  methods: {
    navIconChange() {
      this.navBtn = !this.navBtn;
    }
  }
};
</script>
