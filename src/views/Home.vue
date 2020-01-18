<template>
  <div id="Home">
    <intro />
    <screen-time />
    <safe-videos />
    <quizzes />
  </div>
</template>

<script>
import Intro from "../components/Home/Intro";
import ScreenTime from "../components/Home/ScreenTime";
import SafeVideos from "../components/Home/SafeVideos";
import Quizzes from "../components/Home/Quizzes";
export default {
  components: {
    Intro,
    ScreenTime,
    SafeVideos,
    Quizzes
  }
};
</script>
