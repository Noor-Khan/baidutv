<template>
  <div class="kid-details">
    <v-form ref="form" v-model="valid">
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            label="Parent's Name"
            v-model="parentName"
            :rules="parentNameRules"
            hide-details="auto"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            label="Kid's Name"
            v-model="kidsArr[0].kidName"
            :rules="kidNameRules"
            hide-details="auto"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <v-select
            v-model="kidsArr[0].kidAge"
            :items="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
            :rules="[v => !!v || 'Age is required']"
            label="Age"
          ></v-select>
        </v-col>
        <v-col cols="12" md="6" class="text-left">
          <v-radio-group
            v-model="kidsArr[0].kidGender"
            row
            class="mt-5"
            :rules="[v => !!v || 'Field is required']"
          >
            <v-radio label="Boy" value="Boy" color="primary"></v-radio>
            <v-radio label="Girl" value="Girl" color="primary"></v-radio>
          </v-radio-group>
        </v-col>
      </v-row>
      <v-snackbar top color="primary">
        Sorry, you need to fill out the form!
        <v-btn color="white" text @click="$emit('closeSnackbar', false)">Close</v-btn>
      </v-snackbar>
      <v-row>
        <v-col cols="12" class="py-0">
          <div class="more-kids">
            <v-checkbox
              v-model="moreKids"
              @change.once="addKid"
              class="mx-2 mt-0"
              color="primary"
              label="I have more kids."
            ></v-checkbox>
          </div>
        </v-col>
      </v-row>
      <div v-for="(n, index) in kidsArr" :key="index">
        <div v-if="index !== 0">
          <v-row v-if="moreKids">
            <v-col cols="12" md="4">
              <v-text-field
                label="Kid's Name"
                v-model.trim="n.kidName"
                :rules="[v => !!v || 'Field is required']"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="2">
              <v-select
                label="Age"
                :items="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
                v-model="n.kidAge"
                :rules="[v => !!v || 'Field is required']"
              ></v-select>
            </v-col>
            <v-col cols="12" md="4">
              <v-radio-group
                v-model="n.kidGender"
                row
                class="mt-5"
                :rules="[v => !!v || 'Field is required']"
              >
                <v-radio label="Boy" value="Boy" color="primary"></v-radio>
                <v-radio label="Girl" value="Girl" color="primary"></v-radio>
              </v-radio-group>
            </v-col>
            <v-col cols="12" md="2" class="text-left d-flex align-center">
              <v-btn small @click="addKid()">
                more
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-col>
            <v-snackbar v-model="moreKidSnackbar" top color="primary">
              We are Sorry!! You can't add more than 4 kids!
              <v-btn color="white" text @click="moreKidSnackbar = false">Close</v-btn>
            </v-snackbar>
          </v-row>
        </div>
      </div>
      <v-row>
        <v-col cols="12">
          <primary-button text="Next Step" @click.native="validate()" btnClass="primary"></primary-button>
          <v-btn text @click="reset()">Cancel</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>
<script>
import PrimaryButton from "../../Buttons/Button";
export default {
  props: {},
  components: {
    PrimaryButton
  },
  data() {
    return {
      parentName: "",
      kidName: "",
      valid: true,
      kidAge: "",
      kidGender: null,
      parentNameRules: [
        v => !!v || "Field is required",
        v => (v && v.length >= 4) || "Password must have 5+ characters"
      ],
      kidNameRules: [
        v => !!v || "Field is required",
        v => (v && v.length >= 4) || "Password must have 5+ characters"
      ],
      kids: 1,
      moreKidSnackbar: false,
      moreKids: false,
      firstChild: null,
      submitStatus: null,
      secondChild: null,
      kidsArr: [
        {
          kidName: "",
          kidAge: "",
          kidGender: "",
          kidInterest: ""
        }
      ]
    };
  },
  methods: {
    addKid() {
      if (this.kids <= 3) {
        this.kidsArr = [
          ...this.kidsArr,
          { kidName: "", kidAge: "", kidGender: "" }
        ];
        this.kids = this.kids + 1;
      } else {
        this.moreKidSnackbar = true;
      }
    },
    validate() {
      if (this.$refs.form.validate()) {
        this.$emit("nextStep", 2);
        this.$emit("kidsList", this.kidsArr);
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
.v-input--radio-group__input,
.v-input--checkbox {
  label {
    line-height: 20px !important;
    margin-top: 8px;
  }
}
</style>