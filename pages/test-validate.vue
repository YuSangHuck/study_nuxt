<template>
  <section class="test-validate">
    <div>
      <p>email</p>
      <input v-validate="'required|email'" name="a" type="text" />
      <span>{{ errors.first('a') }}</span>
    </div>
    <div>
      <p>myinput</p>
      <input v-validate="'required'" name="myinput" type="text" />
      <span>{{ errors.first('myinput') }}</span>
    </div>
    <button @click="checkErr">Check Error</button>
  </section>
</template>
<script>
export default {
  components: {},
  data() {
    return {}
  },
  created() {},
  methods: {
    checkErr() {
      alert(this.errors)
      for (const group in this.errors.collect()) alert(group)
    }
  }
}
</script>

<style></style>
