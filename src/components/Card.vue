<template>
  <Modal class="modal-card" @close="close">
    <div slot="body" class="card">
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
        <button class="btn-modal" @click.prevent="close">&times;</button>
      </template>
    </div>
  </Modal>
</template>

<script>
import { mapState } from 'vuex'
import Modal from '@/components/Modal.vue'

export default {
  name: 'Card',
  components: {
    Modal
  },
  data() {
    return {
      data: null,
      loading: false,
      bid: null,
      cid: null,
    }
  },
  watch: {
    '$route': {
      handler: 'fetchData',
      immediate: true
    }
  },
  computed: {
    ...mapState([
      'board'
    ])
  },
  methods: {
    fetchData() {
      this.bid = this.$route.params.bid
      this.cid = this.$route.params.cid
      this.loading = true
      setTimeout( () => {
          this.data = this.board.find( elem => elem.id === this.cid)
          this.loading = false
      }, 500)
    },
    close() {
      console.log('close')
      this.$router.push(`/b/${this.bid}`).catch(()=>{})
    },
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
    overflow: hidden;
    position: relative;
    height: 100%;
    padding-left: 500px;
    padding-right: 20px;
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
    word-wrap: break-word;
    word-break: break-word;
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
