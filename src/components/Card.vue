<template>
  <div class="card">
    <div class="loading" v-if="loading">
      <span class="loading__bar"></span>
    </div>

    <template v-else>
      <div class="card__info">
        <img :src="require(`@/assets/images/${ data.img }`)" class="card__img" width="400" height="400" alt="">
        <div class="card__detail">
          <h5 class="card__title">{{ data.title }}</h5>
          <ul class="card__list">
            <li class="card__item">CLIENT : {{ data. client }}</li>
            <li class="card__item">PERIOD : {{ data. period }}</li>
            <li class="card__item">SKILLS : {{ data. skills }}</li>
            <li class="card__item" v-if="data.details">DETAILS : {{ data. details }}</li>
            <li class="card__item" v-if="data.url">LINK : <a :href="data.url" class="card__link" target="_blank">{{ data.url }}</a></li>
          </ul>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { board } from '@/api'

export default {
  name: 'Card',
  data() {
    return {
      data: null,
      loading: false,
      cid: null,
    }
  },
  watch: {
    '$route': {
      handler: 'fetchData',
      immediate: true
    }
  },
  methods: {
    fetchData() {
      this.cid = this.$route.params.cid
      this.loading = true
      setTimeout( () => {
        board.fetch('experience')
          .then(data => {
            this.data = data.find( elem => elem.id === this.cid)
            console.log(this.data)
          })
          .finally(() => {
            this.loading = false
          })
        }, 500)
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  overflow: hidden;
  display: block;
  margin: 50px auto 0;
  width: 1000px;
  height: 500px;
  border: 1px solid $color-border;
  text-align: center;

  &__info {
    position: relative;
    padding-left: 500px;
  }

  &__title {
    font-size: $font-size-xl;
    font-weight: $font-weight-regular;
    line-height: 80px;
  }

  &__img {
    position: absolute;
    top: 50px;
    left: 50px;
    border: 1px solid $color-border;
  }

  &__detail {
    float: left;
    padding-top: 50px;
    text-align: left;
  }

  &__item {
    font-size: $font-size-lg;
    line-height: 40px;
  }

  &__link {
    color: $gray-100;
    font-size: $font-size-sm;
    font-weight: $font-weight-light;
  }
}
</style>
