<template>
  <section id="SafeVideos">
    <b-container>
      <b-row>
        <b-col md="6">
          <div class="safe-videos-heading">
            <h3>
              Ensure that children can
              <br />only choose "Safe Videos"
            </h3>
          </div>
          <div class="safe-videos-btn">
            <primary-button text="Learn More" btnClass="white" />
          </div>
        </b-col>
        <b-col md="6">
          <div class="safe-videos-img">
            <img src="../../assets/images/safe-videos.png" alt="safe-videos" class="img-fluid" />
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
#SafeVideos {
  position: relative;
  background-size: 100%;
  background-color: #5733ff;
  padding: 7rem 0;
  display: flex;
  align-items: center;
  &:before {
    content: "";
    position: absolute;
    background-image: url("../../assets/images/Vector1.png");
    height: 175px;
    width: 100%;
    bottom: 100%;
    background-size: cover;
    left: 0;
  }
  &:after {
    content: "";
    position: absolute;
    background-image: url("../../assets/images/Vector.png");
    width: 100%;
    height: 175px;
    bottom: -1rem;
    background-size: cover;
    left: 0;
  }
  .topCurve {
    position: absolute;
    bottom: 99%;
  }
  .bottomCurve {
    position: absolute;
    width: 100%;
    z-index: 0;
    bottom: -4rem;
  }
  .safe-videos-heading {
    margin-top: 5rem;
    text-align: left;
    h3 {
      color: #fff;
    }
  }
  .safe-videos-btn {
    text-align: left;
    margin-top: 25px;
  }
  .safe-videos-img {
    margin-top: -10rem;
    padding-bottom: 8rem;
  }
}
</style>