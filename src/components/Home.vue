<template>
  <div class="home">

    <div class="loading" v-if="loading">
      Loading Home...
    </div>

    <template v-else>
      <div class="all-boards">
        <ul class="all-boards__list">
          <li v-for="item in data" :key="item.id" class="all-boards__item" >
            <router-link :to="`/b/${item.id}`" :style="getBackground(item.id, item.img)">
              <em class="text">{{ item.title | capitalize }}</em>
            </router-link>
            <!-- Personal Info | About Me -->
          </li>
        </ul>
      </div>
    </template>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Home',
  data() {
    return {
      data: null,
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
        axios.get(process.env.BASE_URL+'data/data.json')
          .then( res => {
            this.data = res.data.board
          })
          .catch(res => {
            console.log(res);
          })
          .finally(() => {
            this.loading = false
          })
      }, 500);
    },
    getBackground(id, img) {
      const bgPos = id === "2" ? "50% 30%" : "50% 50%"
      const bgStyle = {
        "backgroundImage": `url('${img}')`,
        "backgroundPosition" : `${ bgPos }`,
        "backgroundSize": "cover"
      }
      return bgStyle
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
.home {
  width: $cont-width;
  margin: 0 auto;
  font-size: 56px;
  line-height: 200px;
  text-align: center;
}

.all-boards {
  padding: 20px;

  &__item {
    width: 100%;
    padding-top: 20px;

    &:first-child {
      padding-top: 0;
    }

    a {
      position: relative;
      display: block;
      width: 100%;
      height: 155px;
      background-color: #000000;
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

    .text {
      position: relative;
      color: #ffffff;
      font-size: 36px;
      line-height: 155px;
    }
  }
}
</style>
