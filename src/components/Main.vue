<template>
  <main>
      {{productsArray.length}}
    <section id="mainList" class="main-section" v-if="displayMode === 1 || displayMode === 2">
      <span id="mainListHeader" class="main-section-header">Latest products</span>
      <div id="latestList" class="main-section-items"></div>
    </section>
    <section class="main-section" v-if="displayMode === 1">
      <span class="main-section-header">Popular products</span>
      <div id="popularList" class="main-section-items"></div>
    </section>
    <section class="cart" v-if="displayMode === 3">
      <!-- <div class="cart-item"><span>ESP8266 NodeMCU v3</span><a class="cart-item-button" href="">-</a><span>1</span> <a class="cart-item-button" href="">+</a> <span> x </span><span>299.97</span><span> = </span><span>299.97 ₽</span><a class="cart-item-button" href="">X</a></div> -->
    </section>
    <section class="main-support" v-if="displayMode === 4"></section>
  </main>
</template>

<script>
export default {
    props: {
        displayMode: Number,
        productsArray: Object
    },
    data: {
        // displayMode: 1
    }
};
</script>

<style lang="scss">
    @import "../SASS/main";
</style>