<template>
  <div id="header">
    <v-toolbar>
      <v-toolbar-title>BaiduTV</v-toolbar-title>
      <ul class="nav-list hidden-sm-and-down ml-5">
        <li v-for="(route, index) in navRoutes" :key="index" class="nav-item">
          <router-link :to="route.path" v-if="route.name !== 'Legal'">{{route.name}}</router-link>
        </li>
      </ul>
      <v-spacer></v-spacer>
      <primary-button
        class="nav-list hidden-sm-and-down"
        text="Register"
        btnClass="register"
        @click.native="registerModal()"
      />
      <v-dialog v-model="mobMenu" fullscreen hide-overlay transition="dialog-bottom-transition">
        <template v-slot:activator="{ on }">
          <v-btn text color="primary" v-on="on" class="hidden-sm-and-up p0">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-toolbar dark color="primary" style="border-radius: 0;">
            <v-btn icon dark @click="mobMenu = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
          </v-toolbar>
          <ul class="nav-list">
            <v-list-item v-for="(route, index) in navRoutes" :key="index" class="nav-item">
              <v-list-item-content>
                <v-list-item-title>
                  <router-link
                    to
                    v-if="route.name !== 'Legal'"
                    @click.native="navigate(route.path)"
                  >{{route.name}}</router-link>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </ul>
        </v-card>
      </v-dialog>
    </v-toolbar>
    <registration-modal :modalShow="isVisibleModal" @closeModal="hideModal" />
  </div>
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
      isVisibleModal: false,
      mobMenu: false
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
    },
    navigate(path) {
      this.$router.push({ path: path });
      this.mobMenu = false;
    }
  }
};
</script>
<style lang="scss">
</style>
