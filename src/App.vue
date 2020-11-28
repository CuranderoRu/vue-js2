<template>
    <div id="app">
        <div class="greeting">Initial {{ greeting }}</div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            greeting: 'config'
        }
    }
}
</script>

<style lang="scss">
    .greeting {
        color: darkred;
    }
</style>