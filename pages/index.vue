<template>
  <section class="container">
    <div class="test-og-tags">
      <input type="text" v-model="name">
      <button @click="$router.push(name)">go to study-nuxt.ml/{{ name }}</button>
      살아있냐
    </div>
    <div>
      <logo />
      <h1 class="title">
        nuxt
      </h1>
      <h2 class="subtitle">
        Study nuxt application
      </h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green"
          >Documentation</a
        >
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
          >GitHub</a
        >
      </div>
    </div>
    <nuxt-link to="test-cookie">test-cookie</nuxt-link>
    <nuxt-link to="test-validate">test-validate</nuxt-link>
    <nuxt-link to="test-local-storage">test-local-storage</nuxt-link>
    <nuxt-link to="test-swal">test-swal</nuxt-link>
    <nuxt-link to="test-string-parsing">test-string-parsing</nuxt-link>
    <nuxt-link to="test-redirect">test-redirect</nuxt-link>
    <!-- <p>key: <input v-model="key" type="text"></p>
    <p>val: <input v-model="val" type="text"></p> -->
    <!-- <button @click="handleLocalStorage('set')">set</button>
    <button @click="handleLocalStorage('get')">get</button> -->
    <p>isAuthorized: {{getIsAuthorized}}</p>
    <p>userID: {{getUserID}}</p>
    <button @click="signIn({a:1, b:2})">singnIn</button>
    <button @click="signOut">singnOut</button>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
// import nuxtStorage from 'nuxt-storage';
  import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  components: {
    Logo
  },
  data() {
    return {
      key: '',
      val: '',
      name: '',
    }
  },
  computed: {
    ...mapState({
      isAuthorized: state => state.auth.isAuthorized,
      userID: state => state.auth.userID,
    }),
    ...mapGetters({
      getIsAuthorized: 'getIsAuthorized',
      getUserID: 'getUserID',
    })
  },
  head() {
    // console.log('head called in default');
    return {
      title: 'home',
      meta: [
        { property: 'og:title', content: 'home title', vmid: 'og:title' },
        { property: 'og:description', content: 'home description', vmid: 'og:description' },
        { property: 'og:image:type', content: 'image/jpg', vmid: 'og:image:type' },
        { property: 'og:image', content: '/og_home.jpg', vmid: 'og:image' },
        { property: 'og:url', content: 'http://study-nuxt.ml', vmid: 'og:url' },
        { property: 'og:type', content: 'website', vmid: 'og:type' },
      ],
    };
  },
  created() {
    // this.$cookiz.set('testCookie', 'i am cookie1!', {
    //   path: '/',
    //   maxAge: 60 * 60 * 24 * 7
    // })
    // alert(`before test ${this.ret}`)
    // this.ret = this.test()
    // alert(`after test ${this.ret}`)
  },
  mounted() {
    this.$cookiz.set('testCookie', 'i am cookie1!', {
      path: '/',
      maxAge: 60 * 60 * 24 * 7
    })
    // console.log(process.env)
    // alert(`process.env.baseUrl: ${process.env.baseUrl}`)
    // alert(`process.env.test: ${process.env.test}`)
    // alert(`process.env.YSH: ${process.env.YSH}`)
    // alert(`process.env: ${JSON.stringify(process.env)}`)
  },
  destroyed() {
    // alert('나 이제 죽는당!')
    // alert(window.localStorage.getItem('vuex'))
    window.localStorage.removeItem('vuex')
    // alert('죽었당!')
    // alert(window.localStorage.getItem('vuex'))
  },
  methods: {
    // handleLocalStorage(method) {
    //   if (method === 'set') nuxtStorage.localStorage.setData(this.key, this.val);
    //   if (method === 'get') console.log(nuxtStorage.localStorage.getData(this.key));
    // },
    // handleVuex(method) {
    //   if (method === 'set') this.$store..localStorage.setData(this.key, this.val);
    //   if (method === 'get') console.log(nuxtStorage.localStorage.getData(this.key));
    // }
    ...mapActions( 'auth',[
      'signIn',
      'signOut',
    ])
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

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
