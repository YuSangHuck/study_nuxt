<template>
  <section class="test-async">
    <section class="test-timer">
      <p>timer test</p>
      <p>name: <input v-model="name" type="text"></p>
      <p>sec: <input v-model="sec" type="text"></p>
      <button @click="timerWithNew(name, sec)">call timerWithNew(name, sec)</button>
      <button @click="timerWithResolve(name, sec)">call timerWithResolve(name, sec)</button>
    </section>
    <section class="test">
      <p>timerName: <input v-model="timerName" type="text"></p>
      <button @click="testAsync">testAsync</button>
      <button @click="testThen">testThen</button>
    </section>
  </section>
</template>
<script>
import { Promise, resolve } from 'q';
export default {
  components: {},
  data() {
    return {
      name: 'a',
      sec: 5,
      timerName: 'timerWithNew',
    }
  },
  // created() {
  methods: {
    timerWithNew(name, sec) {
      return new Promise(resolve => {
        setTimeout(function() {
          console.log(`${name} called`)
          resolve();
        }, 1000 * sec);
      })
    },
    timerWithResolve(name, sec) {
      return Promise.resolve(() => {
          setTimeout(function() {
            console.log(`${name} called`)
            resolve();
          }, 1000 * sec)
      });
        // .then(
        // })
    },
    async testAsync(timerName) {
      try {
        await this.timerWithNew('name1', 1);
        await this.timerWithNew('name2', 1);
        await this.timerWithNew('name3', 1);
        await this.timerWithNew('name4', 1);
        await this.timerWithNew('name5', 1);
        await this.timerWithResolve('name1', 1);
        await this.timerWithResolve('name2', 1);
        await this.timerWithResolve('name3', 1);
        await this.timerWithResolve('name4', 1);
        await this.timerWithResolve('name5', 1);
      }
      catch(error) {
        console.error(error);
      }
      console.log('last call in testAsync');
    },
    testThen(timerName) {
      Promise.resolve()
        .then(() => this.timerWithNew('name1', 1))
        .then(() => this.timerWithNew('name2', 1))
        .then(() => this.timerWithNew('name3', 1))
        .then(() => this.timerWithNew('name4', 1))
        .then(() => this.timerWithNew('name5', 1))
        .then(() => this.timerWithResolve('name1', 1))
        .then(() => this.timerWithResolve('name2', 1))
        .then(() => this.timerWithResolve('name3', 1))
        .then(() => this.timerWithResolve('name4', 1))
        .then(() => this.timerWithResolve('name5', 1))
        .catch((err) => {
          console.error(err);
        })
      console.log('first call in testThen');
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
