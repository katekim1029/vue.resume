<template>
  <div class="cont">
    <div class="loading" v-if="loading">
      <span class="loading__bar"></span>
    </div>

    <template v-else>
      <h3 class="title">EXPERIENCE</h3>
      <div class="board">
        <ul class="board__list">
          <li class="board__item" v-for="item in board" :key="item.id">
            <router-link class="board__link" :to="`/b/${bid}/c/${item.id}`">
              <img :src="require(`@/assets/images/${ item.img }`)" width="100" height="100" alt="">
            </router-link>
          </li>
        </ul>
      </div>

      <router-view></router-view>
    </template>
  </div>
</template>

<script>
import { mapState,  mapActions } from 'vuex'

export default {
  name: 'Board',
  data() {
    return {
      loading: false,
      bid: null,
    }
  },
  created() {
    this.fetchData()
  },
  computed: {
    ...mapState([
      'board'
    ])
  },
  methods: {
    ...mapActions([
      'FETCH_BOARD'
    ]),
    fetchData() {
      this.loading = true
      this.bid = this.$route.params.bid
      setTimeout(() => {
        this.FETCH_BOARD({id: this.bid}).finally(() => {
          this.loading = false
        })
      }, 500)
    }
  }
}
</script>

<style lang="scss" scoped>
.board {
  &__list {
    text-align: center;
  }

  &__item {
    display: inline-block;
    width: 100px;
    height: 100px;
    margin: 10px;
  }

  &__link {
    position: relative;
    display: block;
    font: 0/0 Arial;

    &::after {
      @include prefixer(transition, all 0.7s ease, webkit spec);

      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 1px solid $color-border;
    }

    &:hover::after {
      border: 2px solid $color-100;
    }

    img {
      display: block;
    }
  }
}
</style>
