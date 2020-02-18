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
        <v-snackbar v-model="authErr" top color="primary">
          {{errorMessage}}
          <v-btn color="white" text @click="authErr = false">Close</v-btn>
        </v-snackbar>
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
import axios from "axios";
import SocialButton from "../../Buttons/SocialButton";
import PrimaryButton from "../../Buttons/Button";
export default {
  props: {
    nextStep: {
      type: Function,
      required: true
    }
  },
  components: {
    SocialButton,
    PrimaryButton
  },
  data() {
    return {
      errorMessage: "",
      step: 1,
      valid: true,
      authErr: false,
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
        axios
          .post("http://localhost:9000/register", { email: this.email })
          .then(response => {
            console.log(response);
            this.nextStep(1);
          })
          .catch(err => {
            console.log(err.message);
            this.authErr = true;
            this.errorMessage = err.message;
          });
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