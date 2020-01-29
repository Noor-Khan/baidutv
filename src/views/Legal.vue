<template>
  <div id="Legal">
    <page-header />
    <header-description
      heading="Legal"
      text="With Baidu control, you are in charge of thescreen time, and control the amount and types of videos your kids view. "
    />
    <section class="legal-detail">
      <v-container>
        <v-row>
          <v-col md="8" offset-md="2" class="text-left">
            <div class="who-we-are mt-5">
              <div class="legal-heading">
                <h4 class="font-weight-bold text-uppercase">Privacy & Policies</h4>
              </div>
              <div class="legal-para text-justify">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, impedit error optio accusantium facilis eaque, excepturi fugit animi quam assumenda dolores consequuntur architecto similique praesentium placeat natus iure temporibus vel!</p>
                <ul>
                  <li>Quam assumenda dolores consequuntur architecto similique praesentium</li>
                  <li>Ipsum dolor sit, amet consectetur adipisicing elit.</li>
                  <li>Quos, impedit error optio accusantium facilis eaque consectetur.</li>
                  <li>Quam assumenda dolores consequuntur architecto similique praesentium</li>
                </ul>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, impedit error optio accusantium facilis eaque, excepturi fugit animi quam assumenda dolores!</p>
              </div>
            </div>
            <div class="our-vision mt-5">
              <div class="legal-heading">
                <h4 class="font-weight-bold text-uppercase">Dislaimers</h4>
              </div>
              <div class="legal-para text-justify">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, impedit error optio accusantium facilis eaque, excepturi fugit animi quam assumenda dolores consequuntur architecto similique praesentium placeat natus iure temporibus vel!
                  Lorem ipsum dolor sit, amet consectetur adipisicing similique praesentium placeat natus iure temporibus vel!
                </p>
                <ul>
                  <li>Quam assumenda dolores consequuntur architecto similique praesentium</li>
                  <li>Ipsum dolor sit, amet consectetur adipisicing elit.</li>
                  <li>Quos, impedit error optio accusantium facilis eaque consectetur.</li>
                  <li>Quam assumenda dolores consequuntur architecto similique praesentium</li>
                </ul>
              </div>
            </div>
            <div class="our-mission mt-5">
              <div class="legal-heading">
                <h4 class="font-weight-bold text-uppercase">Terms & Conditions for use</h4>
              </div>
              <div class="legal-para text-justify">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, impedit error optio accusantium facilis eaque, excepturi fugit animi quam assumenda dolores consequuntur architecto similique praesentium placeat natus iure temporibus vel!
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, impedit error optio accusantium facilis eaque, excepturi fugit animi quam assumenda dolores consequuntur architecto similique praesentium placeat natus iure temporibus vel!
                </p>
                <ul>
                  <li>Quam assumenda dolores consequuntur architecto similique praesentium</li>
                  <li>Ipsum dolor sit, amet consectetur adipisicing elit.</li>
                  <li>Quos, impedit error optio accusantium facilis eaque consectetur.</li>
                  <li>Quam assumenda dolores consequuntur architecto similique praesentium</li>
                </ul>
              </div>
            </div>
            <Register />
          </v-col>
        </v-row>
      </v-container>
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
