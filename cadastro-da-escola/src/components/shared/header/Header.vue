<template>
  <div class="header" id="header-form">
    <img src="../../../assets/header/escola.png">
    <h1>Cadastro da Escola Parceira</h1>
  </div>
</template>

<script>
export default {
  name: 'header-form'
}
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  width: 1120px;
  margin: 30px auto;
  height: 230px;

  img {
    display: block;
    margin: 0 auto;
    opacity: 0.6;
    z-index: 1;
    width: 287px;
    height: 160px;
  }

  h1 {
    font-family: 'Satisfy', sans-serif;
    text-align: center;
    font-size: 40px;
    color: #24dbdd;
    filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.2));
  }
}
</style>
