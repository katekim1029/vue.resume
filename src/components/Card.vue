<template>
  <div class="card">
    Card Layer
    <span>cid: {{ cid }}</span>
  </div>
</template>

<script>
export default {
  name: 'Card',
  data() {
    return {
      cid: null
    }
  },
  watch: {
    '$route'() {
      this.cid = this.$route.params.cid
    }
  },
  created() {
    console.log(this.$route)
    this.cid = this.$route.params.cid
  }
}
</script>

<style lang="scss" scoped>
.card {
  display: block;
  margin: 0 auto;
  width: 300px;
  height: 300px;
  background: rgba(0,0,0,0.5);
  font-size: 18px;
  line-height: 300px;
  text-align: center;
}
</style>