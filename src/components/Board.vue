<template>
  <div class="board">

    <div class="loading" v-if="loading">
      <span class="loading__bar"></span>
    </div>

    <template v-else>
      <h3 class="board__title">EXPERIENCE</h3>
      <ul class="board__list">
        <li v-for="item in data" :key="item.id">
          <router-link :to="`/b/${bid}/c/${item.id}`">{{ item.title }}</router-link></li>
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
    padding: 0 0 10px 0;
    text-align: left;

    li {
      display: inline-block;
      line-height: 50px;
    }
    a {
      margin: 0 10px;
      font-size: 18px;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>