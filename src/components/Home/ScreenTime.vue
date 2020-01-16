<template>
  <section id="ScreenTime">
    <b-container>
      <b-row>
        <b-col md="6">
          <div class="screen-time-img">
            <img src="../../assets/images/baidu.png" alt="Baidu Screen Time" class="img-fluid" />
          </div>
        </b-col>
        <b-col md="6">
          <div class="screen-time-heading">
            <h3>
              Limit the screen time
              <br />on tablet given to children
            </h3>
          </div>
          <div class="screen-time-btn">
            <primary-button text="Learn More" btnClass="primary" />
          </div>
        </b-col>
      </b-row>
    </b-container>
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
#ScreenTime {
  position: relative;
  padding: 10rem 0;
  display: flex;
  align-items: center;
  .screen-time-img {
    margin-top: -8rem;
    padding-bottom: 50px;
    img {
      width: 85%;
    }
  }
  .screen-time-heading {
    text-align: left;
    margin-top: 2rem;
    h3 {
      line-height: 48px;
      color: #4b4b4b;
    }
  }
  .screen-time-btn {
    margin-top: 25px;
    text-align: left;
  }
}
</style>
