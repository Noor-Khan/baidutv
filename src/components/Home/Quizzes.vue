<template>
  <section id="quizzes">
    <b-container>
      <b-row>
        <b-col md="6" xs="12">
          <div class="quize-img">
            <img src="../../assets/images/quizzes.png" alt class="img-fluid" />
          </div>
        </b-col>
        <b-col md="6" xs="12">
          <div class="quize-heading">
            <h3>
              Inserts quick educational
              <br />quizzes to get more screen
              time
            </h3>
          </div>
          <div class="quize-btn">
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
#quizzes {
  position: relative;
  // height: 100vh;
  padding: 8rem 0;
  display: flex;
  align-items: center;
  .quize-img {
    img {
      width: 80%;
    }
  }
  .quize-heading {
    margin-top: 7rem;
    text-align: left;
  }
  .quize-btn {
    margin-top: 25px;
    text-align: left;
  }
  .quize-img {
    margin-top: -4rem;
  }
}
</style>