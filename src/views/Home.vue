<template>
  <div class="home">
    <intro />
    <screen-time />
    <safe-videos />
    <quizzes />
    <callout />
    <Footer />
  </div>
</template>

<script>
import Intro from "../components/Home/Intro";
import ScreenTime from "../components/Home/ScreenTime";
import SafeVideos from "../components/Home/SafeVideos";
import Quizzes from "../components/Home/Quizzes";
import Callout from "../components/Home/Callout";
import Footer from "../components/Home/Footer";
export default {
  components: {
    Intro,
    ScreenTime,
    SafeVideos,
    Quizzes,
    Callout,
    Footer
  }
};
</script>
