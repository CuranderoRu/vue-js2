<template>
  <div id="app" class="container">
    <Header />
    <Main :displayMode="displayMode" :productsArray="productsArray" />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default {
  components: {
    Header,
    Main,
    Footer,
  },
  data() {
    return {
      displayMode: 1,
      pageIndex: 0,
      smallImagePath: "./img/small/",
      productsArray: [],
    };
  },
  mounted: function() {
    this.pageIndex = 0;
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
        this.productsArray = [];
        let prom = fetch(`/js/database${this.pageIndex}.json`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.productsArray = this.productsArray.concat(this.productsArray, data.data);
            })
            .catch(err => {
                console.warn('Check your network connection', err);
            });
    },
  },
};
</script>

<style lang="scss">
@import "./SASS/style";
</style>