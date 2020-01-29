<template>
  <section id="callout">
    <v-container>
      <v-row>
        <v-col>
          <div class="callout-heading">
            <h2>Let's get started</h2>
          </div>
          <div class="callout-btn">
            <primary-button text="Register" btnClass="white" @click.native="registerModal()" />
          </div>
        </v-col>
      </v-row>
    </v-container>
    <registration-modal :modalShow="isVisibleModal" @closeModal="hideModal" />
  </section>
</template>
<script>
import primaryButton from "../Buttons/Button";
import RegistrationModal from "../Registration/RegisterModal";
export default {
  components: {
    primaryButton,
    RegistrationModal
  },
  data() {
    return {
      isVisibleModal: false
    };
  },
  methods: {
    registerModal() {
      this.isVisibleModal = !this.isVisibleModal;
    },
    hideModal(closeModal) {
      this.isVisibleModal = closeModal;
    }
  }
};
</script>
<style lang="scss" scoped>
#callout {
  position: relative;
  background-image: url("../../assets/images/callout-bg.png");
  background-size: cover;
  background-position: top;
  padding-top: 40px;
  padding-bottom: 40px;
  .callout-heading {
    h2 {
      color: #fff;
      font-family: "Roboto";
      font-size: 48px;
    }
  }
  .callout-btn {
    margin-top: 35px;
  }
}
</style>
