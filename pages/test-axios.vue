<template>
  <section class="test-axios">
    <p>ssr test</p>
    <p>response is {{ response }}</p>
  </section>
</template>
<script>
export default {
  components: {},
  data() {
    return {}
  },
  async asyncData({ $axios, params }) {
    let response
    await $axios
      .get('/', {
        timeout: 2000
      })
      .then(res => {
        response = res.data
        // console.log(res)
      })
      .catch(err => {
        // response = err
        console.error(err)
      })

    return { response }
  },
  created() {},
  methods: {}
}
</script>

<style></style>
