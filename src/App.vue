<template>
  <div id="app">
    <div class="header">
      <p class="header__cont">Welcome to Your <strong class="highlight">Vue.js</strong> App</p>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
#app {
  position: relative;
  height: 100%;
  width: 1024px;
  min-height: 100%;
  margin: 0 auto;
  background: $bg-cont;
}
.header {
  height: 80px;
  background: #222;
  &__cont {
    font-size: 30px;
    line-height: 80px;
    text-align: center;
  }
}
.highlight {
  color: $highlight;
}
</style>
