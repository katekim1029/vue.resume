<template>
  <div class="navbar">
    <div class="navbar__list">
      <router-link class="navbar__link" to="/">HOME</router-link>
      <router-link class="navbar__link" to="/login">LOGIN</router-link>
    </div>
    <p class="navbar__text" v-if="name">Hello, <strong class="navbar__user">{{ name }}</strong>!</p>
  </div>
</template>

<script>
import { bus } from '@/utils/bus'

export default {
  name: 'Navbar',
  data() {
    return {
      name: null
    }
  },
  created() {
    bus.$on('name', (name) => {
      this.name = name
    })
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  height: 72px;
  padding: 0 20px;
  background: $color-300;

  &__link {
    margin-left: 10px;
    color: $white;
    font-size: $font-size-lg;
    line-height: 72px;
    text-decoration: none;

    &:first-child {
      margin-left: 0;
    }
    &:hover {
      text-decoration: underline;
    }
  }

  &__text {
    color: $white;
    font-size: $font-size-lg;
    line-height: 72px;
    text-align: right;
  }

  &__user {
    color: $primary;
  }
}
</style>