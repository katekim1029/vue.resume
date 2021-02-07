<template>
  <Modal class="modal-view" :class="{ 'is-loading': loading }" @close="close">

    <div slot="body">

      <div class="loading" v-if="loading">
        <span class="loading__bar"></span>
      </div>

      <template v-else>
        <div class="post-view">
          <strong class="post-view__tit">{{ post.title }}</strong>
          <p class="post-view__cnt">{{ post.body }}</p>
        </div>

        <button class="btn-modal" @click="close">&times;</button>
      </template>
    </div>
  </Modal>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import Modal from '@/components/Modal.vue'

export default {
  name: 'PostView',
  components: {
    Modal
  },
  props: [
    'pid'
  ],
  data() {
    return {
      loading: true,
    }
  },
  computed: {
    ...mapState([
      'post'
    ])
  },
  methods: {
    ...mapMutations([
      'SET_IS_VIEW_POST'
    ]),
    ...mapActions([
      'FETCH_POST'
    ]),
    close() {
      this.SET_IS_VIEW_POST(false)
    }
  },
  created() {
    this.FETCH_POST(this.pid)
      .finally(() => {
        this.loading = false
      })
  },
}
</script>

<style lang="scss">
.modal-mask.modal-view {
  transition: all 0s ease 0s;

  .modal-container {
    position: relative;
    width: 800px;
    padding: 100px 50px 50px;
    font-family: $font-family-base;
    transition: all 0s ease 0s;
  }

  .modal-body {
    margin: 0;
  }
  .modal-header, .modal-footer {
    display: none;
  }

  .loading {
    min-height: 100px;
  }
}

.post-view {
  width: 700px;
  margin: 0 auto;

  &__tit {
    display: block;
    font-weight: $font-weight-light;
    font-size: $font-size-xl;
    line-height: 1.1;
  }

  &__cnt {
    padding-top: 30px;
    color: $gray-100;
    font-weight: $font-weight-light;
    font-size: $font-size-lg;
  }
}
</style>