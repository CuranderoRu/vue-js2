<template>
    <section class="cart">
        <CartItem
        v-for="item in getCartArray" :key="item.id"
        :id="item.id"
        />
    </section>
</template>

<script>

import CartItem from './CartItem';

import { mapGetters } from 'vuex';

export default {
    components: {
        CartItem,
    },
    computed:{
        ...mapGetters('products', ['getCartArray']),
    }
}
</script>

<style>

</style>