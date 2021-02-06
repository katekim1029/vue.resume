<template>
  <div class="navbar">
    <div class="navbar__list">
      <router-link class="navbar__link" to="/">HOME</router-link>
      <a href="#" class="navbar__link" @click.prevent="logout" v-if="isAuth">LOGOUT</a>
      <router-link class="navbar__link" to="/login" v-else>LOGIN</router-link>
    </div>
<!--        <p class="navbar__text">-->
<!--          Hello, <strong class="navbar__user"></strong>!-->
<!--        </p>-->
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'FakeNavbar',
  computed: {
    ...mapGetters([
      'isAuth'
    ]),
  },
  methods: {
    ...mapMutations([
      'LOGOUT'
    ]),
    logout() {
      this.LOGOUT()
      this.$router.push('/login').catch(()=>{})
    }
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