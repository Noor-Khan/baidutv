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
          <primary-button text="Register" btnClass="register" @click.native="registerModal()" />
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <registration-modal :modalShow="isVisibleModla" @hideModal="hideModal" />
  </header>
</template>
<script>
import PrimaryButton from "../Buttons/Button";
import RegistrationModal from "../Registration/Register";
export default {
  components: {
    PrimaryButton,
    RegistrationModal
  },
  data() {
    return {
      navRoutes: null,
      navBtn: true,
      isVisibleModla: false
    };
  },
  created() {
    this.navRoutes = this.$router.options.routes;
  },
  methods: {
    navIconChange() {
      this.navBtn = !this.navBtn;
    },
    registerModal() {
      this.isVisibleModla = !this.isVisibleModla;
    },
    hideModal(closeModal) {
      this.isVisibleModla = closeModal;
    }
  }
};
</script>
