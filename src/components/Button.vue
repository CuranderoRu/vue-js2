<template>
  <button class='btn' @click="onBtnClicked">
      <slot></slot>
  </button>
</template>

<script>
export default {
    methods: {
        onBtnClicked(e){
            this.$emit('btnEvent');
        }
    }
}
</script>

<style lang="scss" module>
    .btn {
        display: block;
        min-width: 150px;
        margin: 0 auto;
        padding: 10px 0;
        color: #656363;
        background: transparent;
        background-color: #f7f7f7;
        text-transform: uppercase;
        border: none;
        border-radius: 6%;
        transition: .3s ease-in;
        &:active,
        &:focus {
            outline: none;
            color: #f7f7f7;
            font-weight: 700;
            background-color: #f31c1c;
        }
        &:hover {
            background-color: #fc5a5a;
        }
    }

</style>