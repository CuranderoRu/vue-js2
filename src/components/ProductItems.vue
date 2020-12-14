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
        v-for="arrItem in getProductsToDisplay()"
        :key="arrItem"
        :id="arrItem"
      />
    </div>
    <Button v-if="type !== 'popularList'" @btnEvent="onLoadClick"
      >Load more</Button
    >
  </section>
</template>

<script>
import ProductItem from "./ProductItem";

import { mapGetters, mapActions } from "vuex";
import Button from "./Button.vue";

export default {
  props: {
    type: String,
  },
  components: {
    ProductItem,
    Button,
  },
  methods: {
    ...mapActions("products", ["loadMore"]),
    getSectionName() {
      if (this.type === "popularList") {
        return "POPULAR PRODUCTS";
      } else {
        return this.getFilterName;
      }
    },
    getProductsToDisplay() {
      if (this.type === "popularList") {
        return this.getPopularArray;
      } else {
        return this.getLatestArray;
      }
    },
    onLoadClick() {
      this.loadMore();
    },
  },
  computed: {
    ...mapGetters("products", [
      "getLatestArray",
      "getPopularArray",
      "getFilterName",
      "getDisplayMode",
    ]),
  },
};
</script>

<style>
</style>