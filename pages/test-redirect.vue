<template>
  <section class="test-redirect">
    <!-- {{ query }}
    {{ query.a }} -->
    aa
  </section>
</template>
<script>
export default {
  validate({ params }) {
    console.log('validate called')
    return true;
  },
  asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
    console.log('asyncData called')
    // console.log(`reciect called with ${redirect}`);
    // const status = 302;
    // const path = '/';
    // const customQuery = '?imp_uid=imp_891993938751&merchant_uid=P201906210000086&imp_success=false';
    // const customQuery = 'a=1';
    // &error_msg=F0005%3A%EA%B2%B0%EC%A0%9C%EA%B0%80%20%EC%A4%91%EB%8B%A8%EB%90%98%EC%97%88%EC%8A%B5%EB%8B%88%EB%8B%A4%28imp_891993938751%29.01%20%7C%20%EC%82%AC%EC%9A%A9%EC%9E%90%EA%B0%80%20%EA%B2%B0%EC%A0%9C%EB%A5%BC%20%EC%B7%A8%EC%86%8C%20%ED%95%98%EC%98%80%EC%8A%B5%EB%8B%88%EB%8B%A4.
    // redirect(status, path, customQuery);
    // http://localhost:3000/market/pay/step2?imp_uid=imp_891993938751&merchant_uid=P201906210000086&imp_success=false&error_msg=F0005%3A%EA%B2%B0%EC%A0%9C%EA%B0%80%20%EC%A4%91%EB%8B%A8%EB%90%98%EC%97%88%EC%8A%B5%EB%8B%88%EB%8B%A4%28imp_891993938751%29.01%20%7C%20%EC%82%AC%EC%9A%A9%EC%9E%90%EA%B0%80%20%EA%B2%B0%EC%A0%9C%EB%A5%BC%20%EC%B7%A8%EC%86%8C%20%ED%95%98%EC%98%80%EC%8A%B5%EB%8B%88%EB%8B%A4.

    // const testQuery = query;
    return { query }
  },
  components: {},
  data() {
    return {
    }
  },
  created() {
  },
  methods: {
  }
}
</script>

<style></style>
