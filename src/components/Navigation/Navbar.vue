<template>
  <header id="header">
    <nav>
      <v-toolbar>
        <v-toolbar-title>BaiduTV</v-toolbar-title>
        <ul class="nav-list">
          <li v-for="(route, index) in navRoutes" :key="index" class="nav-item">
            <router-link :to="route.path" v-if="route.name !== 'Legal'">{{route.name}}</router-link>
          </li>
        </ul>
        <v-spacer></v-spacer>
        <primary-button text="Register" btnClass="register" @click.native="registerModal()" />
      </v-toolbar>
    </nav>
    <registration-modal :modalShow="isVisibleModal" @closeModal="hideModal" />
  </header>
</template>
<script>
import PrimaryButton from "../Buttons/Button";
import RegistrationModal from "../Registration/RegisterModal";
export default {
  components: {
    PrimaryButton,
    RegistrationModal
  },
  data() {
    return {
      navRoutes: null,
      navBtn: true,
      isVisibleModal: false
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
      this.isVisibleModal = !this.isVisibleModal;
    },
    hideModal(closeModal) {
      this.isVisibleModal = closeModal;
    }
  }
};
</script>
<style lang="scss">
</style>
