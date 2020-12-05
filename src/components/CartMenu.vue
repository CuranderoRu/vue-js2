<template>
  <ul id="cartManagementMenu" class="page-header-cart-actions">
      <li id = "viewCartItems">
          <a href="#" class="page-header-nav-item-link" id="aviewCartItems" v-on:click.prevent="clickHandler">View items</a>
      </li>
      <li id="clearCart">
          <a href="#" class="page-header-nav-item-link" id="aclearCart" v-on:click.prevent="clickHandler">Clear cart</a>
      </li>
  </ul>
</template>

<script>

import { mapActions } from "vuex";

export default {
    methods: {
        ...mapActions("products", ["displayCart", "clearCart"]),
        clickHandler(e){
            if(e.target.id === 'aviewCartItems'){
                this.displayCart();
            }else if(e.target.id === 'aclearCart'){
                this.clearCart();
            }
        }
    }
}
</script>

<style>

</style>