<template>
  <li :class="className">
      <a :href="href" class="page-header-nav-item-link" 
      v-on:click.prevent="clickHandler" 
      :id="setId(href)">{{ label }}
      </a>
      <ul class="page-header-nav-item-submenu" v-if="submenu && submenu.length">
            <MenuItem 
            v-for="arrItem in submenu" 
            :key="arrItem.href"
            :href="arrItem.href"
            :label="arrItem.label"
            :category="arrItem.category"
            :submenu="arrItem.submenu"
            :className="'page-header-nav-item-submenu-item'"
        />

      </ul>
  </li>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: "MenuItem",
    props:{
        href: String,
        label: String,
        category: String,
        submenu: Array,
        className: String,
    },
    components: {
        MenuItem: () => import('./MenuItem.vue'),
    },
    methods: {
        ...mapActions('products', ['displaySupport', 'filterCategory']),
        clickHandler(e){
            if(e.target.id === 'menu-item-support'){
                this.displaySupport();
            }else if(e.target.id === 'menu-item-about'){
                console.log('About: TO DO');
            }else if(e.target.id === 'menu-item-blog'){
                console.log('Blog: TO DO');
            }else if(e.target.id.substring(0, 10) === 'menu-item-'){
                let category = e.target.id.substring(10).replace('-','/');
                this.filterCategory(category);
            }else{
                console.log(e);
            }
        },
        setId(category){
            return `menu-item-${category.replace('/', '-')}`;
        }
    }
}
</script>

<style>

</style>