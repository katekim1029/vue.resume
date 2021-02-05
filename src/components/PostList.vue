<template>
  <div class="cont">
    <div class="loading" v-if="loading">
      <span class="loading__bar"></span>
    </div>

    <template v-else>
      <h3 class="title">Fake Board</h3>

      <div class="post-list">

        <table class="post-list__tb">
          <colgroup>
            <col style="width:100px">
            <col>
            <col style="width:100px">
          </colgroup>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>사용자</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="post in board" :key="post.id" >
              <td>{{ post.id }}</td>
              <td class="post-list__text">
                <a href="#" class="post-list__link" @click.prevent="openViewModal(post.id)">
                  {{ post.title }}
                </a>
              </td>
              <td>{{ post.userId }}</td>
            </tr>
          </tbody>
        </table>

        <div class="post-list__page">
          <button type="button" :disabled="page === 1" @click="prev" class="post-list__btn">이전</button>
          <strong>{{ page }}</strong> / {{ count }} 페이지
          <button type="button" :disabled="page === count" @click="next" class="post-list__btn">다음</button>
        </div>
        <button type="button" class="btn-board" @click="writeModal=true">글쓰기</button>

        <PostView v-if="viewModal" :data="postData" @close="viewModal=false" />
        <PostWrite v-if="writeModal" @close="writeModal=false" @submit="onWritePost" />
      </div>
    </template>
  </div>
</template>

<script>
import PostView from '@/components/PostView.vue'
import PostWrite from '@/components/PostWrite.vue'
import { boardFake } from  '@/api'

export default {
  name: 'PostList',
  components: {
    PostView,
    PostWrite
  },
  data() {
    return {
      loading: false,
      data: '',
      error: '',
      page: 1,
      size: 10,
      viewModal: false,
      writeModal: false,
      postData: {},
    }
  },
  created() {
    this.fetchData()
  },
  computed: {
    count() {
      const total = this.data.length;
      return Math.ceil(total / this.size)
    },
    board() {
      const start = (this.page - 1) * this.size
      const end = start + this.size
      return this.data.slice(start, end)
    },
  },
  methods: {
    fetchData() {
      this.loading = true
      boardFake.fetch()
        .then(data => {
          this.data = data
        })
        .finally(() => {
          this.loading = false
        })
    },
    prev() {
      this.page -= 1
    },
    next() {
      this.page += 1
    },
    onWritePost(payload) {
      boardFake.create(payload)
        .then(() => {
          this.fetchData()
        })
    },
    openViewModal(id) {
      this.loading = true
      boardFake.fetch(id)
        .then(data => {
          this.postData = data
        })
        .finally(() => {
          this.loading = false
          this.viewModal = true
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.post-list {
  &__tb {
    table-layout: fixed;
    width: 800px;
    margin: 0 auto;
    border-top: 1px solid $black;

    th,
    td {
      height: 40px;
      padding: 0 10px;
      border-bottom: 1px solid $color-border;
      font-size: $font-size-lg;
      font-weight: $font-weight-light;
      line-height: 40px;
    }

    th {
      border-color: $black;
    }
  }

  &__text {
    @include ellipsis;

    display: table-cell;
    text-align: left;
  }

  &__link {
    font-size: $font-size-lg;
    font-weight: $font-weight-light;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  &__page {
    margin: 40px 0;
    color: $gray-100;
    font-size: $font-size-lg;
    line-height: 50px;

    strong {
      font-weight: $font-weight-bold;
      color: $font-color-base;
    }
  }

  &__btn {
    width: 100px;
    height: 50px;
    margin: 0 10px;
    border: 1px solid $color-border;
    background: $white;
    color: $gray-100;
    font-size: $font-size-lg;
    text-align: center;
    line-height: 48px;
    text-decoration:none;
    cursor: pointer;

    &:disabled {
      border: 1px solid $color-border;
      background: $color-border;
      color: $gray-100;
      cursor: default;
    }
  }
}
</style>
