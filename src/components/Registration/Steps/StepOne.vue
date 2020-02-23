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
          <facebook-login
            class="facebook-btn"
            loginLabel="Continue with Facebook"
            appId="392844361649439"
            @login="getUserData"
            @get-initial-status="getUserData"
          ></facebook-login>
          <social-button
            text="Continue with Google"
            @click.native="handleClickSignIn()"
            btnClass="google"
          ></social-button>
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
            this.successMessage = dude.name;
            this.nextStep({ step: 1, successRegister: this.successMessage });
            console.log(response);
            console.log(dude);
          })
          .catch(err => {
            console.log(err);
            this.errorMessage = err.message;
            this.authDialog = true;
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
        })
        .catch(err => {
          this.errorMessage = err.message;
          this.authDialog = true;
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
    this.getUserData();
  }
};
</script>
<style lang="scss">
.facebook-btn {
  padding: 0 !important;
  button {
    background: #f5f5f5 !important;
    color: rgba(0, 0, 0, 0.87) !important;
    text-transform: uppercase;
    font-size: 0.875rem !important;
    border-radius: 4px;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    font-weight: 500;
    letter-spacing: 0.0892857143em;
    width: 300px;
    height: unset;
    padding: 10px !important;
    margin-top: 10px;
    margin-bottom: 10px;
    &:focus {
      outline: none;
      box-shadow: none;
    }
    img {
      position: absolute;
      left: 10px;
      background: #5733ff !important;
      top: 14px;
      padding: 3px;
      width: 25px;
      border-radius: 50%;
    }
    .spinner {
      height: 30px !important;
    }
  }
}
</style>