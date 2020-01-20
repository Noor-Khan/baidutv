<template>
  <div>
    <b-modal id="modal-xl" size="lg" v-model="modalShow" :hide-footer="true">
      <template v-slot:modal-header="{ close }">
        <!-- Emulate built in modal header close button action -->
        <h5>Modal Header</h5>
        <b-button size="sm" variant="outline-danger" @click="close()">x</b-button>
      </template>
      <el-steps :active="active" finish-status="success">
        <el-step title="Step 1"></el-step>
        <el-step title="Step 2"></el-step>
        <el-step title="Step 3"></el-step>
      </el-steps>
      <el-button style="margin-top: 12px;" @click="next()">Next step</el-button>
      <b-button @click="hideModal()">Close Me</b-button>
    </b-modal>
  </div>
</template>

<script>
// import StepOne from "./StepOne";
// import StepTwo from "./StepTwo";
export default {
  props: ["modalShow"],
  components: {},
  data() {
    return {
      active: 0
    };
  },
  methods: {
    hideModal() {
      this.$emit("hideModal", false);
    },
    next() {
      if (this.active++ > 2) this.active = 0;
    }
  }
};
</script>