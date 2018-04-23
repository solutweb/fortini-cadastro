<template>
  <div id="app">
    <header-form></header-form>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang="scss">
#app {
  background: #FFF;
  width: 90%;
  margin: 0 auto;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}
</style>
