<template>
  <footer id="footer">
    <v-container>
      <v-row>
        <v-col>
          <div class="copyright-sentence">
            <p>
              Copyright &copy; 2019
              <a href="#">BAIDUTV</a>, All Rights Reserved
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </footer>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
#footer {
  position: relative;
  .copyright-sentence {
    padding: 10px 0;
    p {
      margin: 0;
    }
  }
}
</style>