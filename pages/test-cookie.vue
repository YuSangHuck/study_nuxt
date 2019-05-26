<template>
  <section class="test-cookie">
    <p>cookie is {{ cookie }}</p>
    <button @click="setCookie('abc')">set new cookie</button>
  </section>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      cookie: ''
    }
  },
  created() {
    this.cookie = this.$cookiz.get('testCookie')
  },
  methods: {
    setCookie(cookieName) {
      this.$cookiz.set('testCookie', 'abc')
    }
  }
}
</script>

<style></style>
