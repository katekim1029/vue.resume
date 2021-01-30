<template>
  <div id="app">
    <div class="main">
      <p class="main__cont">Welcome to Your <strong class="highlight">Vue.js</strong> App</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
#app {
  height: 100%;
}
.main {
  position: relative;
  width: 1024px;
  min-height: 100%;
  margin: 0 auto;
  background: $bg-cont;

  &__cont {
    font-size: 30px;
    text-align: center;
  }
}
.highlight {
  color: $highlight;
}
</style>
