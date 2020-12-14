<template>
  <div id="app" class="container">
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import { mapActions} from 'vuex'

export default {
  components: {
    Header,
    Main,
    Footer,
  },
  mounted: function() {
    this.fetchProducts();
  },
  methods: {
    ...mapActions('products', [
      'fetchProducts'
    ]),
  },
};
</script>

<style lang="scss">
@import "./SASS/style";
</style>