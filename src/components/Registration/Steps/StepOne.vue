<template>
  <v-form ref="form" v-model="valid" :lazy-validation="lazy">
    <v-row>
      <v-col cols="12" md="8" offset-md="2">
        <v-text-field
          label="Email Address"
          hide-details="auto"
          v-model="email"
          :rules="emailRules"
          required
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row></v-row>
    <v-row>
      <v-col cols="12">
        <primary-button text="Register" @click.native="validate" btnClass="primary"></primary-button>
        <v-btn text @click="reset()">Close</v-btn>
        <div class="mt-5">
          <h5 class="text-uppercase">or</h5>
          <social-button text="Continue with Facebook" btnClass="facebook"></social-button>
          <social-button text="Continue with Google" btnClass="google"></social-button>
        </div>
      </v-col>
    </v-row>
  </v-form>
</template>
<script>
import SocialButton from "../../Buttons/SocialButton";
import PrimaryButton from "../../Buttons/Button";
export default {
  props: {},
  components: {
    SocialButton,
    PrimaryButton
  },
  data() {
    return {
      step: 1,
      valid: true,
      snackbar: false,
      lazy: false,
      email: "",
      terms: null,
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ]
    };
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.$emit("nextStep", 1);
      }
    },
    reset() {
      this.$emit("closeModal", false);
      this.$refs.form.reset();
    }
  }
};
</script>
<style lang="scss">
</style>