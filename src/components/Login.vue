<template>
  <div class="cont">
    <h3 class="title">Login</h3>

    <div class="login">
      <form @submit.prevent="onSubmit">
        <div class="login__box">
          <label for="name" class="login__lb">Name</label>
          <input type="text" id="name" class="login__inp" placeholder="Enter your name" v-model="name" autofocus>
        </div>
        <div class="login__box">
          <label for="password" class="login__lb">Password</label>
          <input type="password" id="password" class="login__inp" placeholder="Enter 1111" v-model="password">
        </div>
        <p class="login__error"><span class="error" v-if="error">{{ error }}</span></p>
        <button class="login__btn" type="submit" :class="{'is-valid': !invalidForm}" :disabled="invalidForm">LOG IN</button>
      </form>

    </div>
  </div>
</template>

<script>
import { auth } from '@/api'
import { bus } from '@/utils/bus'

export default {
  name: 'Login',
  data() {
    return {
      name: '',
      password: '',
      error: '',
      rPath: ''
    }
  },
  computed: {
    invalidForm() {
      return !this.name || !this.password
    }
  },
  created() {
    this.rPath = this.$route.query.rPath || ''
  },
  methods: {
    onSubmit() {
      console.log(this.name, this.password)
      auth.login(this.name, this.password)
        .then(() => {
          localStorage.setItem('token', this.name)
          bus.$emit('name', this.name)
          this.$router.push(this.rPath).catch(()=>{});
        })
        .catch(err => {
          this.error = err
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
    margin-top: -10px;
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
}
</style>