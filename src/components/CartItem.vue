<template>
  <div class="cart-item">
      <span>{{ currentItem.title }}</span>
      <a href="#" class="cart-item-button" v-on:click.prevent="onReduceClick">-</a>
      <span>{{ currentCartItem.q }}</span>
      <a href="#" class="cart-item-button" v-on:click.prevent="onIncreaseClick">+</a>
      <span>x</span>
      <span>{{ currentItem.price }}</span>
      <span>=</span>
      <span>{{ currentCartItem.sum }}</span>
      <a href="#" class="cart-item-button" v-on:click.prevent="onDeleteClick">X</a>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';

export default {
    props:{
        id: String,
    },
    computed: {
        ...mapGetters('products', ['getProducts', 'getCartArray']),
        currentItem() {
            return this.getProducts[this.id] || {};
        },
        currentCartItem() {

            let currentCartItem = this.getCartArray.find(item => {
                return item.id === this.id
            }) 
            || {id: this.id, q: 0, sum: 0};

            currentCartItem.sum = (currentCartItem.q * this.currentItem.price).toFixed(2);

            return currentCartItem;
        },
    },
    methods: {
        ...mapActions('products', ['addToCart', 'removeFromCart']),
        onReduceClick(e){
            this.removeFromCart({id: this.id, q: 1});
        },
        onIncreaseClick(e){
            this.addToCart({id: this.id, q: 1});
        },
        onDeleteClick(e){
            this.removeFromCart({id: this.id, q: 0});
        },
    }
}
</script>

<style>

</style>