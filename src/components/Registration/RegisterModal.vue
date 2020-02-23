<template>
  <div class="registration-modal text-center">
    <v-dialog v-model="regModalShow" width="750" style="border-radius: 15px;">
      <v-card>
        <v-stepper v-model="initial">
          <v-stepper-header>
            <template v-for="(step, index) in steps">
              <v-stepper-step
                :key="`${index}-step`"
                :complete="initial > index + 1"
                :step="index + 1"
                class="text-capitalize"
              >{{ step.name }}</v-stepper-step>
              <v-divider v-if="index !== steps.length - 1" :key="index"></v-divider>
            </template>
            <!-- <v-icon large color="green darken-2">mdi-domain</v-icon> -->
          </v-stepper-header>
          <v-stepper-items>
            <v-stepper-content step="1">
              <step-one :nextStep="nextStep" @closeModal="$emit('closeModal', false)"></step-one>
            </v-stepper-content>
            <v-stepper-content step="2">
              <step-two
                :nextStep="nextStep"
                @kidsList="updateKidList"
                @closeModal="$emit('closeModal', false)"
              ></step-two>
            </v-stepper-content>
            <v-stepper-content step="3">
              <step-three
                :nextStep="nextStep"
                :newKidList="updateKidListData"
                @closeModal="$emit('closeModal', false)"
              ></step-three>
            </v-stepper-content>
            <v-stepper-content step="4">
              <v-card
                width="120px"
                height="120px"
                style="line-height: 120px; border-radius:50%;"
                class="m-auto"
                color="primary"
              >
                <v-icon size="60px" color="#fff">mdi-check</v-icon>
                <v-spacer></v-spacer>
              </v-card>
              <h3 class="mt-3">Success!</h3>
              <h4>You have successfully registered.</h4>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
        <v-snackbar v-model="authDialog" top color="primary">
          Your have successfully registered with {{successMessage}} email.
          <v-btn color="white" text @click="authDialog = false">Close</v-btn>
        </v-snackbar>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import StepOne from "./Steps/StepOne";
import StepTwo from "./Steps/StepTwo";
import StepThree from "./Steps/StepThree";

export default {
  props: {
    modalShow: Boolean
  },
  components: {
    StepOne,
    StepTwo,
    StepThree
  },
  computed: {
    regModalShow: {
      get() {
        return this.modalShow;
      },
      set() {
        this.modalShow;
      }
    }
  },
  data() {
    return {
      initial: 1,
      authDialog: false,
      successMessage: "",
      valid: true,
      updateKidListData: null,
      snackbar: false,
      detailsSnackbar: false,
      steps: [
        { name: "sign up", button: "Register" },
        { name: "kid details", button: "Next Step" },
        { name: "kid interests", button: "Confirm" },
        { name: "Confirm", button: "" }
      ],
      items: ["Foo", "Bar", "Fizz", "Buzz"]
    };
  },
  methods: {
    closeSnackbar(val) {
      this.snackbar = val;
    },
    moreKidShow(value) {
      this.moreKids = value;
    },
    updateKidList(payload) {
      this.updateKidListData = payload;
    },
    nextStep(step) {
      if (step === this.steps.length) {
        alert("thanks for registering your kid!!");
      } else {
        step.successRegister
          ? ((this.initial = step.step + 1),
            (this.successMessage = step.successRegister),
            (this.authDialog = true))
          : (this.initial = step + 1);
        // this.initial = step + 1;
        console.log(step.successRegister);
      }
    }
  }
};
</script>
<style lang="scss" >
.v-stepper {
  .v-stepper__header {
    box-shadow: none;
    .v-stepper__step {
      display: flex;
      flex-direction: column;
    }
  }
  .v-stepper__items {
    .v-stepper__wrapper {
      padding: 2rem 2rem;
      background-color: #fafafa;
      border: 1px solid #e8e8e8;
      border-radius: 15px;
    }
  }
}
</style>