<template>
  <section id="callout">
    <b-container>
      <b-row>
        <b-col>
          <div class="callout-heading">
            <h2>Let's get started</h2>
          </div>
          <div class="callout-btn">
            <primary-button text="Register" btnClass="white" />
          </div>
        </b-col>
      </b-row>
    </b-container>
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
  background-color: #5733ff;
  padding-bottom: 40px;
  &:before {
    content: "";
    position: absolute;
    background-image: url("../../assets/images/calloutCurve.png");
    background-size: cover;
    background-position: top;
    width: 100%;
    height: 75px;
    bottom: 99%;
    left: 0;
  }
  .callout-heading {
    h2 {
      color: #fff;
      font-family: "Roboto";
      font-size: 48px;
    }
  }
  .callout-btn {
    margin-top: 25px;
  }
}
</style>
