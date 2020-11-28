<template>
    <div id="app">
        <div class="greeting">Hello {{ greeting }}</div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            greeting: 'world'
        }
    }
}
</script>

<style lang="scss">
    .greeting {
        color: darkred;
    }
</style>