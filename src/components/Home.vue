<template>
  <div class="cont home">
    <div class="loading" v-if="loading">
      <span class="loading__bar"></span>
    </div>

    <template v-else>
      <div class="all-boards">
        <ul class="all-boards__list">
          <li class="all-boards__item" v-for="item in boards" :key="item.id">
            <router-link class="all-boards__link" :to="`${item.path}`" :style="getBackground(item.id, item.img)">
              <em class="all-boards__text">{{ item.title | capitalize }}</em>
            </router-link>
            <!-- Personal Info | About Me -->
          </li>
        </ul>
      </div>
    </template>
  </div>
</template>

<script>
import { board } from '@/api'

export default {
  name: 'Home',
  data() {
    return {
      boards: [],
      loading: false,
    }
  },
  created() {
    console.log("url: " + process.env.BASE_URL)
    console.log(this.$route)
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.loading = true
      setTimeout(() => {
        board.fetch('boards')
          .then(data => {
            this.boards = data
          })
          .finally(() => {
            this.loading = false
          })
      }, 1000)
    },
    getBackground(id, img) {
      const bgPos = id === "2" ? "50% 30%" : "50% 50%"
      return {
        "backgroundImage": `url('${img}')`,
        "backgroundPosition" : `${ bgPos }`,
        "backgroundSize": "cover"
      }
    }
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.toUpperCase()
    }
  }
}
</script>

<style lang="scss" scoped>
.all-boards {
  padding: 20px;

  &__item {
    width: 100%;
    padding-top: 20px;

    &:first-child {
      padding-top: 0;
    }
  }

  &__link {
    position: relative;
    display: block;
    width: 100%;
    height: 155px;
    background-color: $black;
    background-position: 50%;
    background-size: cover;
    text-decoration: none;

    &::before {
      @include prefixer(transition, all 0.7s ease, webkit spec);

      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(36,32,29,0.7);
    }

    &:hover::before {
      background: rgba(36,32,29,1.0);
    }
  }

  &__text {
    position: relative;
    color: $white;
    font-size: $font-size-xl;
    line-height: 155px;
  }
}
</style>
