<template>
  <div class="cont">

    <h3 class="title">Fake Login</h3>

    <div class="login">
      <form @submit.prevent="onSubmit">
        <div class="login__box">
          <label for="email" class="login__lb">Email</label>
          <input type="text" id="email" class="login__inp" maxlength="100" placeholder="Enter email" v-model="email" autofocus>
          <p class="login__text">eve.holt@reqres.in</p>
        </div>
        <div class="login__box">
          <label for="password" class="login__lb">Password</label>
          <input type="password" id="password" class="login__inp" placeholder="Enter password" v-model="password">
          <p class="login__text">cityslicka</p>
        </div>
        <p class="login__error"><span class="error" v-if="error">{{ error }}</span></p>
        <button class="login__btn" type="submit" :class="{'is-valid': !invalidForm}" :disabled="invalidForm">LOG IN</button>
      </form>
    </div>
  </div>
</template>

<script>
import { authFake } from '@/api'

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      error: '',
      rPath: ''
    }
  },
  created() {
    this.rPath = this.$route.query.rPath || '/'
  },
  computed: {
    invalidForm() {
      return !this.email || !this.password
    }
  },
  methods: {
    onSubmit() {
      authFake.login(this.email, this.password)
        .then(data => {
          localStorage.setItem('token', data.token)
          this.$router.push(this.rPath).catch(()=>{})
        })
        .catch(err => {
          this.error = err.data.error
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  width: 300px;
  margin: 0 auto;

  &__lb {
    display: none;
  }
  &__inp {
    width: 100%;
    height: 40px;
    margin: 10px 0;
    border-bottom: 2px solid $black;
    line-height: 40px;
  }
  &__error {
    height: 20px;
    text-align: left;
  }
  &__btn {
    display: block;
    width: 100%;
    height: 50px;
    margin: 20px auto;
    border: 1px solid $color-border;
    background: $color-border;
    color: $gray-100;

    font-size: $font-size-lg;
    text-align: center;
    cursor: pointer;

    &.is-valid {
      border: 1px solid $color-100;
      background: $color-100;
      color: $white;
    }
  }
  &__text {
    margin-top: -5px;
    color: $gray-100;
    font-size: $font-size-sm;
    font-weight: $font-weight-light;
    text-align: left;
  }
}
</style>