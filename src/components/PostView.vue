<template>
  <div class="cont">
    <div class="loading" v-if="loading">
      <span class="loading__bar"></span>
    </div>

    <template v-else>
      <h3 class="title">Fake Board</h3>

      <div class="posts">
        <ul v-for="post in board" :key="post.id" class="posts__list">
          <li class="posts__item">
            <router-link class="posts__link" :to="`/posts/${post.id}`">
              {{ post.id }}. {{ post.title }}
            </router-link>
          </li>
        </ul>
      </div>
    </template>
  </div>
</template>

<script>
import { boardFake } from  '@/api'

export default {
  name: 'PostList',
  data() {
    return {
      loading: false,
      board: '',
      error: ''
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.loading = true
      boardFake.fetch()
        .then(data => {
          this.board = data
        })
        .finally(() => {
          this.loading = false
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.posts {
  &__list {
    width: 700px;
    margin: 0 auto;
  }
  &__item {
    @include ellipsis;
  }
  &__link {
    font-size: $font-size-lg;
    font-weight: $font-weight-light;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
