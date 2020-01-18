<template>
  <section id="intro">
    <Hooper :centerMode="true"
        :wheelControl="false"
        :mouseDrag="false">
      <slide v-for="(slide, index) in slides" :key="index">
        <b-container>
          <b-row>
            <b-col md="6" xs="12" sm="12">
              <div class="intro-left">
                <div class="intro-heading">
                  <h2>{{ slide.title }}</h2>
                  <h3>{{ slide.content }}</h3>
                </div>
                <div class="intro-btn">
                  <primary-button text="Download" btnClass="white" />
                </div>
              </div>
            </b-col>
            <b-col md="6" xs="12" sm="12">
              <div class="intro-right">
                <div class="intro-img">
                  <img src="../../assets/images/tablet2.png" alt="tablet" class="img-fluid" />
                </div>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </slide>
      <hooper-pagination slot="hooper-addons"></hooper-pagination>
    </Hooper>
  </section>
</template>
<script>
import { Hooper, Slide, Pagination as HooperPagination } from "hooper";
import "hooper/dist/hooper.css";
// import { VueperSlides, VueperSlide } from "vueperslides";
import PrimaryButton from "../Buttons/Button";
export default {
  components: {
    Hooper,
    Slide,
    HooperPagination,
    PrimaryButton
    // VueperSlide,
    // VueperSlides
  },
  data() {
    return {
      slides: [
        {
          title: "BAIDU TV App",
          content: "You are in charge of the screen time."
        },
        {
          title: "BAIDU Control App",
          content: "You are in charge of the screen time."
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
#intro {
  background-image: url("../../assets/images/BG.png");
  background-size: cover;
  background-position: center;
  height: 100vh;
  padding: 5rem 0;
  display: flex;
  align-items: center;
  .intro-left {
    text-align: left;
    .intro-heading {
      padding: 20px 10px;
      color: #fff;
      h2 {
        font-family: "Roboto";
        font-size: 60px;
        font-weight: 900;
      }
      h3 {
        margin-top: 20px;
      }
    }
    .intro-btn {
      margin-top: 25px;
    }
  }
}
</style>
