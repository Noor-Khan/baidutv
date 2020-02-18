<template>
  <v-form ref="form" v-model="valid">
    <v-row v-for="(kid, index) in myKidList" :key="index">
      <v-col cols="12" md="6">
        <v-text-field
          label="Kid's Name"
          v-model="kid.kid_name"
          :rules="[v => !!v || 'Field is required']"
          hide-details="auto"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <v-select
          v-model="kid.interest"
          :rules="[v => !!v || 'Field is required']"
          :items="['Watching Videos', 'Video Games', 'Cartoons', 'Movies']"
          label="Select Interests"
        ></v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="12">
        <primary-button text="Next & Confirm" @click.native="validate" btnClass="primary"></primary-button>
        <v-btn text @click="reset()">Cancel</v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>
<script>
import axios from "axios";
import PrimaryButton from "../../Buttons/Button";
export default {
  props: {
    newKidList: {
      required: false,
      default: null
    },
    nextStep: {
      type: Function,
      required: true
    }
  },
  components: {
    PrimaryButton
  },
  computed: {
    myKidList() {
      return this.newKidList && this.newKidList.kid_arr
        ? this.newKidList.kid_arr
        : [];
    }
  },
  data() {
    return {
      kidName: "",
      kidInterest: "",
      valid: true
    };
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        axios
          .post("http://localhost:9000/kid", this.newKidList)
          .then(response => {
            console.log(response);
            this.nextStep(3);
          })
          .catch(err => {
            console.log(err.message);
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