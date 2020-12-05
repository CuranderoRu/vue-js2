<template>
  <section
    class="main-section"
    v-if="getDisplayMode === 1 || getDisplayMode === 2"
  >
    <span id="mainListHeader" class="main-section-header">
        {{ getSectionName() }}
    </span>
    
    <div class="main-section-items">
      <ProductItem 
        v-for="arrItem in getProductsToDisplay()" :key="arrItem" 
        :id="arrItem"
      />
    </div>
  </section>
</template>

<script>
import ProductItem from "./ProductItem";

import { mapGetters } from "vuex";

export default {
  props: {
    type: String,
  },
  components: {
    ProductItem,
  },
  methods: {
      getSectionName(){
          if(this.type === 'popularList'){
              return 'POPULAR PRODUCTS';
          }else{
              return this.getFilterName;
          }
      },
      getProductsToDisplay(){
          if(this.type === 'popularList'){
              return this.getPopularArray;
          }else{
              return this.getLatestArray;
          }
      },
  },
  computed: {
    ...mapGetters("products", ["getLatestArray", "getPopularArray", "getFilterName", "getDisplayMode"]),
  },
};
</script>

<style>
</style>