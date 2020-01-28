<template>
  <section id="ParentApp">
    <v-container>
      <v-row>
        <v-col md="6">
          <div class="pa-img text-right">
            <v-img src="../../assets/images/parent-app-img.png" alt class="img-fluid w-75 m-auto" />
          </div>
        </v-col>
        <v-col md="6" class="text-left">
          <div class="pa-heading">
            <h3 class="text-capitalize font-weight-bold">Parent Control App</h3>
          </div>
          <div class="pa-para">
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
#ParentApp {
  position: relative;
  display: flex;
  align-items: center;
  height: 100vh;
}
</style>