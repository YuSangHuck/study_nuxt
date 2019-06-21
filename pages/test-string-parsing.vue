

<template>
  <section class="container">
    <nuxt-link to="/">home</nuxt-link>
    {{reviews[0]}}
  </section>
</template>

<script>
export default {
  data() {
    return {
      reviews: [
        `제품이 너무나도 좋아요 세상 쓸만하네요.

{{https://s3.ap-northeast-2.amazonaws.com/www.alpha.7renders.com-images/temp/reviewer1_product_1.jpg}}

이 사진은 제가 제일 좋아하는 사진 이랍니다.

{{https://s3.ap-northeast-2.amazonaws.com/www.alpha.7renders.com-images/temp/reviewer1_product_2.jpg}}

어때요 여러분들 쓰고싶죠?

{{https://s3.ap-northeast-2.amazonaws.com/www.alpha.7renders.com-images/temp/reviewer1_product_3.jpg}}

그렇다면 지금 바로 구매하기 버튼 클릭!`,
      ]
    }
  },
  created() {
  },
  methods: {
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
