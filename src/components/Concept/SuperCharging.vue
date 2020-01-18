<template>
  <section id="SuperCharging">
    <b-container fluid>
      <b-row>
        <b-col md="4" class="mr-md-auto pl-0">
          <div class="sc-img text-left">
            <img src="../../assets/images/character3.png" alt class="img-fluid" />
          </div>
        </b-col>
        <b-col md="5" class="mr-md-auto text-left">
          <div class="sc-heading">
            <h3 class="text-capitalize font-weight-bold">Control Screen time</h3>
          </div>
          <div class="sc-para">
            <p>
              It is different from the concept of many other screen time management
              systems which us a combination of preset parameters to “lock” the usage with the kid figuring out pretty much instantly that parents have a control
              app that allows extension of the screen time, and as a result, parents are
              being bugged all the time until they give in.
            </p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
#SuperCharging {
  position: relative;
  background-image: url("../../assets/images/concept-bg.png");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  height: 100vh;
  .sc-heading {
    margin-top: 4rem;
  }
}
</style>