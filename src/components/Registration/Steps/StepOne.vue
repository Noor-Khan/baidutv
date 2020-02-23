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
        <v-snackbar v-model="authDialog" top color="primary">
          {{errorMessage}}
          <v-btn color="white" text @click="authDialog = false">Close</v-btn>
        </v-snackbar>
        <div class="mt-5">
          <h5 class="text-uppercase">or</h5>
          <social-button
            text="Continue with Facebook"
            @click.native="handleClickSignInFb()"
            btnClass="facebook"
          ></social-button>
          <social-button
            text="Continue with Google"
            @click.native="handleClickSignIn()"
            btnClass="google"
          ></social-button>
          <facebook-login
            class="button"
            appId="392844361649439"
            @login="getUserData"
            @get-initial-status="getUserData"
          ></facebook-login>
          <!-- <button @click="authenticate('facebook')">auth Facebook</button> -->
        </div>
      </v-col>
    </v-row>
  </v-form>
</template>
<script>
import axios from "axios";
import facebookLogin from "facebook-login-vuejs";
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
    PrimaryButton,
    facebookLogin
  },
  data() {
    return {
      errorMessage: "",
      step: 1,
      valid: true,
      authDialog: false,
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
    getUserData({ FB, authResponse }) {
      FB.api("/me", dude => {
        axios
          .post("http://localhost:9000/auth/facebook-auth", {
            dude,
            authResponse
          })
          .then(response => {
            console.log(response);
          })
          .catch(err => {
            console.log(err);
          });
      });
    },
    handleClickSignIn() {
      this.$gAuth
        .signIn()
        .then(GoogleUser => {
          return axios.post("http://localhost:9000/auth/google-auth", {
            GoogleUser
          });
        })
        .then(response => {
          this.successMessage = response.data.result.user.email;
          this.nextStep({ step: 1, successRegister: this.successMessage });
          this.authDialog = true;
        })
        .catch(error => {
          console.log({ error });
        });
    },
    validate() {
      if (this.$refs.form.validate()) {
        axios
          .post("http://localhost:9000/auth/register", { email: this.email })
          .then(response => {
            console.log(response);
            this.nextStep(1);
          })
          .catch(err => {
            console.log(err.message);
            this.authDialog = true;
            this.errorMessage = err.message;
          });
      }
    },
    reset() {
      this.$emit("closeModal", false);
      this.$refs.form.reset();
    }
  },
  mounted() {
    let that = this;
    let checkGauthLoad = setInterval(function() {
      that.isInit = that.$gAuth.isInit;
      that.isSignIn = that.$gAuth.isAuthorized;
      if (that.isInit) clearInterval(checkGauthLoad);
    }, 1000);
  }
};
</script>
<style lang="scss">
</style>