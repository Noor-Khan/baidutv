<template>
  <section id="ControlScreenTime">
    <v-container :fluid="true" style="max-width:100%;">
      <v-row>
        <v-col md="4" class="mr-md-auto pl-0">
          <div class="cst-img text-left">
            <v-img src="../../assets/images/character1.png" alt class="img-fluid" />
          </div>
        </v-col>
        <v-col md="5" class="mr-md-auto text-left">
          <div class="cst-heading">
            <h3 class="text-capitalize font-weight-bold">Control Screen time</h3>
          </div>
          <div class="cst-para">
            <p>
              It is different from the concept of many other screen time management
              systems which us a combination of preset parameters to “lock” the usage with the kid figuring out pretty much instantly that parents have a control
              app that allows extension of the screen time, and as a result, parents are
              being bugged all the time until they give in.
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
#ControlScreenTime {
  position: relative;
  margin-top: 5rem;
  background-image: url("../../assets/images/concept-bg.png");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  height: 100vh;
  .cst-heading {
    margin-top: 4rem;
  }
}
</style>