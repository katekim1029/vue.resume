<template>
  <div class="board">

    <div class="loading" v-if="loading">
      <span class="loading__bar"></span>
    </div>

    <template v-else>
      <h3 class="board__title">EXPERIENCE</h3>
      <ul class="board__list">
        <li v-for="item in data" :key="item.id">
          <router-link :to="`/b/${bid}/c/${item.id}`"><img :src="require(`@/assets/images/${ item.img }`)" width="100" height="100"></router-link></li>
      </ul>
      <router-view></router-view>
    </template>

  </div>
</template>

<script>
import { board } from '@/api'

export default {
  name: 'Board',
  data() {
    return {
      data: null,
      loading: false,
      bid: null,
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.loading = true
      this.bid = this.$route.params.bid
      setTimeout(() => {
        board.fetch()
          .then(data => {
            this.data = data.experience.reverse()
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
.board {
  width: $cont-width;
  margin: 0 auto;
  padding-bottom: 100px;
  text-align: center;

  &__title {
    padding-top: 30px;
    padding-bottom: 23px;
    font-size: 56px;
    font-weight: bold;
    line-height: 100px;
  }

  &__list {
    text-align: center;

    li {
      display: inline-block;
      width: 100px;
      height: 100px;
      margin: 10px;
    }
    a {
      position: relative;
      display: block;
      font: 0/0 Arial;

      &::after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 1px solid #e0e0e0;
        @include prefixer(transition, all 0.7s ease, webkit spec);
      }

      &:hover::after {
        border: 2px solid #89786d;
      }
    }

    img {
      display: block;
    }

  }
}
</style>
