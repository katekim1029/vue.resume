<template>
  <div class="loading" v-if="loading">
    Loading Card...
  </div>
  <div class="card" v-else>
    Card Layer
    <span>cid: {{ cid }}</span>
    <div>
      <span> {{ data.title }} </span>
      <span v-if="data.url"><a :href="data.url" target="_blank">바로가기</a></span>
    </div>
    <div>
      <img :src="require(`@/assets/images/${ data.img }`)" width="300" height="300">
    </div>
  </div>
</template>

<script>
import DataJson from '@/assets/data.json'

export default {
  name: 'Card',
  data() {
    return {
      cid: null,
      loading: false,
      data: null,
    }
  },
  watch: {
    '$route': {
      handler: 'fetchData',
      immediate: true
    }
  },
  methods: {
    fetchData() {
      this.loading = true
      setTimeout( () => {
        this.cid = this.$route.params.cid
        this.data = DataJson.experience.find( elem => elem.id === this.cid)
        this.loading = false
      }, 500)
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  display: block;
  margin: 0 auto;
  width: 500px;
  height: 500px;
  background: rgba(0,0,0,0.5);
  font-size: 18px;
  text-align: center;
}
</style>