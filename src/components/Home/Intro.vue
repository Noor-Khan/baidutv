<template>
  <section id="intro">
    <vueper-slides class="no-shadow w-100" :touchable="false" :arrows="false">
      <vueper-slide v-for="(slide, index) in slides" :key="index">
        <template v-slot:content>
          <b-container>
            <b-row>
              <b-col md="6" xs="12">
                <div class="intro-left">
                  <div class="intro-heading">
                    <h2>{{slide.title}}</h2>
                    <h3>{{slide.content}}</h3>
                  </div>
                  <div class="intro-btn">
                    <primary-button text="Download" btnClass="white" />
                  </div>
                </div>
              </b-col>
              <b-col md="6" xs="12">
                <div class="intro-right">
                  <div class="intro-img">
                    <img src="../../assets/images/tablet2.png" alt="tablet" class="img-fluid" />
                  </div>
                </div>
              </b-col>
            </b-row>
          </b-container>
        </template>
      </vueper-slide>
    </vueper-slides>
    <b-carousel
      id="carousel-1"
      v-model="slides"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        v-for="(slide, index) in slides"
        :key="index"
        img-src="https://picsum.photos/1024/480/?image=54"
      >
        <h2>{{slide.title}}</h2>
      </b-carousel-slide>
    </b-carousel>
  </section>
</template>
<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import PrimaryButton from "../Buttons/Button";
export default {
  components: {
    PrimaryButton,
    VueperSlide,
    VueperSlides
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