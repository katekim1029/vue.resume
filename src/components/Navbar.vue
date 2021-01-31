<template>
  <div class="navbar">
    <div class="navbar__link">
      <router-link to="/">HOME</router-link>
<!--      <router-link to="/login">LOGIN</router-link>-->
    </div>
    <p class="navbar__user">Hello, <strong class="highlight">guest</strong>!</p>
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
  padding: 0 20px;
  background: #24201d;

  &__link {
    a {
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