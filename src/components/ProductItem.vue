<template>
  <div class="product-item">
    <img :src="imagePath" :alt="currentItem.title" width="250" height="250" />
    <div class="product-item-spec">
      <h3>{{ currentItem.title }}</h3>
      <span class="product-item-spec-price"
        >{{ currentItem.currency }} {{ currentItem.price }}</span
      >
      <a
        href="#"
        :id="'buybutton-' + id"
        class="product-item-spec-button"
        v-on:click.prevent="onBuyClick"
        >В корзину</a
      >
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  props: {
    id: String,
  },
  computed: {
    ...mapGetters("products", ["getProducts", "getSmallImagePath"]),
    currentItem() {
      return this.getProducts[this.id] || {};
    },
    imagePath() {
      return `${this.getSmallImagePath}${this.currentItem.imgsrc}`;
    },
  },

  methods: {
    ...mapActions("products", ["addToCart"]),
    onBuyClick: function(e) {
      this.addToCart({id: this.id, q: 1});
    },
  },
};
</script>

<style>

</style>