<template>
  <v-form ref="form" v-model="valid">
    <v-row v-for="(kid, index) in newKidArr" :key="index">
      <v-col cols="12" md="6">
        <v-text-field
          label="Kid's Name"
          v-model="kid.kidName"
          :rules="[v => !!v || 'Field is required']"
          hide-details="auto"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <v-select
          v-model="kid.kidInterest"
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
import PrimaryButton from "../../Buttons/Button";
export default {
  props: ["newKidList"],
  components: {
    PrimaryButton
  },
  data() {
    return {
      kidName: "",
      kidInterest: "",
      valid: true,
      newKidArr: null
    };
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.$emit("nextStep", 3);
      }
    }
  },
  reset() {
    this.$emit("closeModal", false);
    this.$refs.form.reset();
  },
  watch: {
    newKidList: function() {
      this.newKidArr = this.newKidList;
    }
  }
};
</script>