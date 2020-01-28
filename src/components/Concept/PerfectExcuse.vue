<template>
  <section id="PerfectExcuse">
    <v-container :fluid="true" style="max-width:100%;">
      <v-row>
        <v-col md="5" class="ml-md-auto text-left">
          <div class="pe-heading">
            <h3 class="text-capitalize font-weight-bold">A Perfect Excuse</h3>
          </div>
          <div class="pe-para">
            <p>
              It is different from the concept of many other screen time management
              systems which us a combination of preset parameters to “lock” the usage with the kid figuring out pretty much instantly that parents have a control
              app that allows extension of the screen time, and as a result, parents are
              being bugged all the time until they give in.
            </p>
          </div>
        </v-col>
        <v-col md="4" class="ml-md-auto pr-0">
          <div class="pe-img text-right">
            <v-img src="../../assets/images/character2.png" alt class="img-fluid" />
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
#PerfectExcuse {
  position: relative;
  display: flex;
  align-items: center;
  height: 100vh;
  .pe-heading {
    margin-top: 4rem;
  }
}
</style>