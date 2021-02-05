<template>
  <Modal class="modal-view">
    <div slot="body">
      <div class="post-view">
        <strong class="post-view__tit">{{ data.title }}</strong>
        <p class="post-view__cnt">{{ data.body }}</p>
      </div>

      <button class="btn-modal" @click="close">&times;</button>
    </div>
  </Modal>
</template>

<script>
import Modal from '@/components/Modal.vue'

export default {
  name: 'PostView',
  components: {
    Modal
  },
  props: ['data'],
  methods: {
    close() {
      this.$emit('close')
    }
  }
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