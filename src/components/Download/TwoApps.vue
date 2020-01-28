<template>
  <section id="TwoApps">
    <v-container :fluid="true" style="max-width: 100%;">
      <v-row>
        <v-col md="6" class="p-0">
          <div class="baidu-tv-app">
            <div class="baidu-tv-heading">
              <h3 class="text-uppercase font-weight-bold">Download baidu tv</h3>
            </div>
            <div class="baidu-tv-para pa-xs-0">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis fermentum neque arcu euismod mauris hendrerit cras.</p>
            </div>
            <div class="baidu-tv-img">
              <img src="../../assets/images/baidu-tv.png" alt class="img-fluid text-center" />
            </div>
            <div>
              <primary-button text="Download" btnClass="primary" />
            </div>
          </div>
        </v-col>
        <v-col md="6" class="p-0">
          <div class="baidu-control-app">
            <div class="baidu-control-heading">
              <h3 class="text-uppercase font-weight-bold">Download baidu control</h3>
            </div>
            <div class="baidu-control-para">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis fermentum neque arcu euismod mauris hendrerit cras.</p>
            </div>
            <div class="baidu-control-img text-center">
              <img src="../../assets/images/control-app.png" alt class="img-fluid text-center" />
            </div>
            <div>
              <primary-button text="Download" btnClass="white" />
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
import PrimaryButton from "../Buttons/Button";

export default {
  components: {
    PrimaryButton
  }
};
</script>
<style lang="scss" scoped>
#TwoApps {
  margin: 5rem 0;
  .baidu-tv-app {
    background-color: #f8f8f8;
    padding: 40px;
    .baidu-tv-heading {
      h3 {
        color: #5733ff;
        font-size: 32px;
      }
    }
    .baidu-tv-para {
      padding: 0 5rem;
    }
    .baidu-tv-img {
      margin: 2rem 0;
    }
  }
  .baidu-control-app {
    background-color: #5733ff;
    padding: 40px;
    color: #fff;
    .baidu-control-heading {
      h3 {
        font-size: 32px;
      }
    }
    .baidu-control-para {
      padding: 0 5rem;
    }
    .baidu-control-img {
      margin: 2rem 0;
    }
  }
}
</style>