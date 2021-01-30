<template>
  <div class="navbar">
    <div class="navbar__link">
      <router-link to="/">Home</router-link>
      <router-link to="/login">Login</router-link>
    </div>
    <p class="navbar__user">Hi, <strong class="highlight">Guest</strong>!</p>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  height: 72px;
  padding: 0 10px;
  background: #24201d;
  &__link a {
    margin-left: 10px;
    color: #fff;
    font-size: 20px;
    line-height: 72px;
    text-decoration: none;

    &:first-child {
      margin-left: 0;
    }
    &:hover {
      text-decoration: underline;
    }
  }
  &__user {
    color: #fff;
    font-size: 20px;
    line-height: 72px;
    text-align: right;
  }
}
.highlight {
  color: $highlight;
}
</style>