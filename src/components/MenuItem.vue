<template>
  <li :class="className">
      <a :href="href" class="page-header-nav-item-link">{{ label }}</a>
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
export default {
    name: "MenuItem",
    props:{
        href: String,
        label: String,
        category: String,
        submenu: Object,
        className: String,
    },
    components: {
        MenuItem: () => import('./MenuItem.vue'),
    },
}
</script>

<style>

</style>