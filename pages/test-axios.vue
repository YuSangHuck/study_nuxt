<template>
  <section class="test-axios">
    <p>ssr test</p>
    <p>reqToServerHeader is {{ reqToServerHeader }}</p>
    <p>response1 is {{ response1 }}</p>
    <p>response2 is {{ response2 }}</p>
  </section>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      reqToServerHeader: {},
      err: {},
    }
  },
  async asyncData({ $axios, params }) {
    let response1, response2
    await $axios
      .get('/', {
        timeout: 2000
      })
      .then(res => {
        response1 = res.headers
      })
      .catch(err => {
        response1 = err
      })
    await $axios
      .get('/', {
        timeout: 2000
      })
      .then(res => {
        response2 = res.headers
      })
      .catch(err => {
        response2 = err
      })

    return { response1, response2 }
  },
  // created() {
  beforeMouunt() {
    this.reqToServerHeader.host = 'this is test-request'
    this.$axios.setHeader('host', 'this is test-request', 'common')
    this.$axios.post('/')
      .then(res => {
        // console.log(res)
      })
      .catch(err => {
        // console.error(err)
        this.err = err
      })
  },
  methods: {}
}
</script>

<style></style>
