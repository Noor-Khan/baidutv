<template>
  <div id="Company">
    <page-header />
    <header-description
      heading="Welcome"
      text="With Baidu control, you are in charge of thescreen time, and control the amount and types of videos your kids view. "
    />
    <section class="company-detail">
      <b-container>
        <b-row>
          <b-col md="8" offset-md="2">
            <div class="who-we-are mt-5">
              <div class="company-heading">
                <h4 class="font-weight-bold text-uppercase">Who we are</h4>
              </div>
              <div class="company-para text-justify">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, impedit error optio accusantium facilis eaque, excepturi fugit animi quam assumenda dolores consequuntur architecto similique praesentium placeat natus iure temporibus vel!
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, impedit error optio accusantium facilis eaque, excepturi fugit animi quam assumenda dolores consequuntur architecto similique praesentium placeat natus iure temporibus vel!
                </p>
              </div>
            </div>
            <div class="our-vision mt-5">
              <div class="company-heading">
                <h4 class="font-weight-bold text-uppercase">Our vision</h4>
              </div>
              <div class="company-para text-justify">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, impedit error optio accusantium facilis eaque, excepturi fugit animi quam assumenda dolores consequuntur architecto similique praesentium placeat natus iure temporibus vel!
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, impedit error optio accusantium facilis eaque, excepturi fugit animi quam assumenda dolores consequuntur architecto similique praesentium placeat natus iure temporibus vel!
                </p>
              </div>
            </div>
            <div class="our-mission mt-5">
              <div class="company-heading">
                <h4 class="font-weight-bold text-uppercase">Our mission</h4>
              </div>
              <div class="company-para text-justify">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, impedit error optio accusantium facilis eaque, excepturi fugit animi quam assumenda dolores consequuntur architecto similique praesentium placeat natus iure temporibus vel!
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, impedit error optio accusantium facilis eaque, excepturi fugit animi quam assumenda dolores consequuntur architecto similique praesentium placeat natus iure temporibus vel!
                </p>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
import PageHeader from "../components/Header/Header";
import HeaderDescription from "../components/Header/HeaderDescription";
export default {
  components: {
    PageHeader,
    HeaderDescription
  }
};
</script>

<style lang="scss" scoped>
#Company {
  padding-bottom: 50px;
}
</style>
