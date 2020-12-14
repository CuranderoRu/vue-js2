<template>
  <main>
    <ProductItems :type="'latestList'" v-if="getDisplayMode === 1 || getDisplayMode === 2" />
    
    <!-- <section
      id="mainList"
      class="main-section"
      v-if="getDisplayMode === 1 || getDisplayMode === 2">
      <span id="mainListHeader" class="main-section-header">{{ getFilterName }}</span>
      <div id="latestList" class="main-section-items">
        <ProductItems :type="'latestList'" />
      </div>
    </section> -->

    <ProductItems :type="'popularList'" v-if="getDisplayMode === 1" />
    
    <!-- <section class="main-section" v-if="getDisplayMode === 1">
      <span class="main-section-header">Popular products</span>
      <div id="popularList" class="main-section-items">
        <ProductItems :type="'popularList'" />
      </div>
    </section> -->

    <Cart v-if="getDisplayMode === 3" />
    
    <section class="main-support" v-if="getDisplayMode === 4">
      <ContactForm />
    </section>
  </main>
</template>

<script>
import { mapGetters } from "vuex";

import ContactForm from "./ContactForm";
import ProductItems from "./ProductItems";
import Cart from "./Cart";

export default {
  components: {
    ContactForm,
    ProductItems,
    Cart,
  },
  computed: {
      ...mapGetters('products', [
          'getDisplayMode',
          'getFilterName',
      ])
    }
};
</script>

<style lang="scss">
@import "../SASS/main";
</style>