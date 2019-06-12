<template>
  <section class="container">
    <nuxt-link to="/">home</nuxt-link>
    <p>key: <input v-model="key" type="text"></p>
    <p>val: <input v-model="val" type="text"></p>
    <button @click="handleLocalStorage('set')">set</button>
    <button @click="handleLocalStorage('get')">get</button>
  </section>
</template>

<script>
import nuxtStorage from 'nuxt-storage';

export default {
  data() {
    return {
      key: '',
      val: '',
    }
  },
  created() {
  },
  methods: {
    handleLocalStorage(method) {
      if (method === 'set') nuxtStorage.localStorage.setData(this.key, this.val);
      if (method === 'get') console.log(nuxtStorage.localStorage.getData(this.key));
    },
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
