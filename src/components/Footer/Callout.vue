<template>
  <section id="callout">
    <v-container>
      <v-row>
        <v-col>
          <div class="callout-heading">
            <h2>Let's get started</h2>
          </div>
          <div class="callout-btn">
            <primary-button text="Register" btnClass="white" />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
import primaryButton from "../Buttons/Button";
export default {
  components: {
    primaryButton
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
