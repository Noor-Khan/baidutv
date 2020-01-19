<template>
  <header id="header">
    <b-navbar type="light" toggleable="lg">
      <b-navbar-brand>Logo</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" @click="navIconChange">
        <b-icon-list v-if="this.navBtn"></b-icon-list>
        <b-icon-x v-else></b-icon-x>
      </b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-5">
          <li class="nav-item" v-for="(route, index) in navRoutes" :key="index">
            <router-link :to="route.path">{{ route.name }}</router-link>
          </li>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <primary-button text="Register" btnClass="register" />
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>
<script>
import PrimaryButton from "../Buttons/Button";
export default {
  data() {
    return {
      navRoutes: null,
      navBtn: true
    };
  },
  components: {
    PrimaryButton
  },
  created() {
    this.navRoutes = this.$router.options.routes;
  },
  methods: {
    navIconChange() {
      this.navBtn = !this.navBtn;
    }
  }
};
</script>
