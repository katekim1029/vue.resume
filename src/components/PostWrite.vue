<template>
  <Modal class="modal-write" @close="close" name="write">

    <div slot="body">

      <form id="add-post-form" @submit.prevent="onSubmit">
        <div class="post-write">
          <label for="subject" class="post-write__lb">제목</label>
          <input type="text" id="subject" class="post-write__inp" v-model="input" ref="input" placeholder="제목을 입력하세요">
          <label for="detail" class="post-write__lb">내용</label>
          <textarea id="detail" class="post-write__ta" v-model="textarea" placeholder="내용을 입력하세요"></textarea>
        </div>

        <div class="btnset">
          <button type="button" class="btn-cancel" @click="close">취소</button>
          <button type="submit" class="btn-board" :disabled="invalid">{{ this.type === 'write' ? '등록' : '수정' }}</button>
        </div>
      </form>

      <button class="btn-modal" @click="close">&times;</button>
    </div>

  </Modal>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import Modal from '@/components/Modal.vue'

export default {
  name: 'PostWrite',
  components: {
    Modal
  },
  props: [
    'type',
    'pid'
  ],
  data() {
    return {
      input: '',
      textarea: ''
    }
  },
  created() {
    if(this.type === 'edit') {
      this.fetchPost()
    }
  },
  mounted() {
    this.$refs.input.focus()
  },
  // watch: {
  //   input(v) {
  //     this.valid = v.trim().length > 0
  //   }
  // },
  computed: {
    ...mapState([
      'post'
    ]),
    invalid() {
      return !this.input.trim() || !this.textarea.trim()
    }
  },
  methods: {
    ...mapMutations([
      'SET_IS_WRITE_POST'
    ]),
    ...mapActions([
      'ADD_POST',
      'FETCH_POST',
      'UPDATE_POST'
    ]),
    onSubmit() {
      if(this.invalid) return
      if(this.type === 'edit') {
        this.UPDATE_POST({id: this.post.id, title: this.input, body: this.textarea, userId: this.post.userId})
          .then(data => {
            console.log(data)
            alert(`id: ${data.id}`)
            this.SET_IS_WRITE_POST(false)
            this.$emit('submit')
          })
      } else {
        this.ADD_POST({title: this.input, body: this.textarea, userId: 1}).then((data) => {
          alert(`id: ${data.id}`)
          this.SET_IS_WRITE_POST(false)
          this.$emit('submit')
        })
      }
    },
    fetchPost() {
      this.FETCH_POST(this.pid)
      this.input = this.post.title
      this.textarea = this.post.body
    },
    close() {
      this.SET_IS_WRITE_POST(false)
    }
  }
}
</script>

<style lang="scss">
.modal-mask.modal-write {
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

.post-write {
  width: 700px;
  margin: 0 auto;

  &__lb {
    display: none;
  }

  &__inp {
    display: block;
    width: 100%;
    height: 40px;
    margin: 10px 0;
    border: 1px solid $color-border;
    line-height: 40px;
  }

  &__ta {
    display: block;
    width: 100%;
    height: 200px;
    border: 1px solid $color-border;
    resize: none;
  }
}
</style>