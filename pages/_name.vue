<template>
  <section class="container">
    {{info}}
  </section>
</template>

<script>
const infos = {
  turtlog: {
    title: '난 turtlog의 title',
    description: '난 turtlog의 description',
    image_type: 'image/jpg',
    image: '/turtlog.jpg',
    url: 'http://study-nuxt.ml/turtlog'
  },
  whale_shark: {
    title: '난 whale_shark의 title',
    description: '난 whale_shark의 description',
    image_type: 'image/jpg',
    image: '/whale_shark.jpg',
    url: 'http://study-nuxt.ml/whale_shark'
  },
}
export default {
  data() {
    return {
      info: infos[this.$route.params.name]
    }
  },
  // lifecycle hook define
  validate({params, redirect, app}) {
    // console.log(infos[params.name])
    if (infos[params.name] === undefined) redirect('/')
    else return true
  },
  head() {
    const name = this.$route.params.name
    return {
      title: name,
      meta: [
        { property: 'og:title', content: infos[name].title, vmid: 'og:title' },
        { property: 'og:description', content: infos[name].description, vmid: 'og:description' },
        { property: 'og:image:type', content: infos[name].image_type, vmid: 'og:image:type' },
        { property: 'og:image', content: infos[name].image, vmid: 'og:image' },
        { property: 'og:url', content: infos[name].url, vmid: 'og:url' },
        { property: 'og:type', content: 'website', vmid: 'og:type' },
      ],
    };
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
