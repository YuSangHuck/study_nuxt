<template>
  <section class="test-axios">
    <p><input v-model="name" type="text"></p>
    <p><input v-model="sec" type="text"></p>
    <button @click="timer(name, sec)">timer(name, sec)</button>
    <button @click="test">test</button>
    <button @click="SerialFlow">SerialFlow</button>
  </section>
</template>
<script>
import { Promise } from 'q';
export default {
  components: {},
  data() {
    return {
      name: '',
      sec: 0,
    }
  },
  // created() {
  methods: {
    doJob(x,sec) {
      return new Promise(resolve => {
        console.log('Start: ' + x);
        setTimeout(() => {
          console.log('End: ' + x);
          resolve(x);
        }, sec *1000);
      });
    },
    async SerialFlow() {
      const result1 = await this.doJob(1,1);
      const result2 = await this.doJob(2,2);
      const result3 = await this.doJob(3,3);
      const finalResult = result1+result2+result3;
      console.log(finalResult);
      return finalResult;
    },
    timer(name, sec) {
      return new Promise(resolve => {
        setTimeout(function() {
          console.log(`${name} called`)
          resolve();
        }, 1000 * sec);
      })
    },
    // async test() {
    //   await this.timer('name1', 2);
    //   await this.timer('name2', 2);
    //   await this.timer('name3', 2);
    //   await this.timer('name4', 2);
    //   await this.timer('name5', 2);
    // }
    test() {
      Promise.resolve()
      .then(() => this.timer('name1', 2))
      .then(() => this.timer('name2', 2))
      .then(() => this.timer('name3', 2))
      .then(() => this.timer('name4', 2))
      .then(() => this.timer('name5', 2))
      .catch((err) => {
        console.error(err);
      })
    }
  }
}
</script>

<style>
.test {
  width: 500px;
  height: 500px;
}
</style>
