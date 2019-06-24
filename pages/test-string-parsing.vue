<template>
  <section class="container">
    <nuxt-link to="/">home</nuxt-link>
    <br><br>
    <p>원본</p>
    <div class="raw">
      <p class="review">{{ raw }}</p>
    </div>
    <br><br>
    <p>파싱 결과 예상</p>
    <div class="reviews">
      <template class="review" v-for="review in reviews">
        <p v-if="review.type === 'text'" :key="review.id">{{ review.content }}</p>
        <img v-else :src="review.content" alt="" :key="review.id"/>
        <!-- <p class="text" :key="review.id">{{review}}</p> -->
      </template>
    </div>
    <br><br>
    <p>파싱 실제 결과</p>
    <div class="reviews">
      <template class="review" v-for="re in res">
        <p v-if="re.type === 'txt'" :key="re.id">{{ re.content }}</p>
        <img v-else :src="re.content" alt="" :key="re.id"/>
      </template>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      // imgUri: /{{(http?s):.*(\/[a-zA-Z0-9\-_?=&]*).(jpg|jpeg|png)}}/,
      // imgUri: /{{.*}}/,
      // raw: '제품이 너무나도 좋아요 세상 쓸만하네요.\n\n{https://s3.ap-northeast-2.amazonaws.com/www.alpha.7renders.com-images/temp/reviewer1_product_1.jpg} \n\n 이 사진은 제가 제일 좋아하는 사진 이랍니다. \n\n {https://s3.ap-northeast-2.amazonaws.com/www.alpha.7renders.com-images/temp/reviewer1_product_2.jpg} \n\n 어때요 여러분들 쓰고싶죠? \n\n {https://s3.ap-northeast-2.amazonaws.com/www.alpha.7renders.com-images/temp/reviewer1_product_3.jpg} \n\n 그렇다면 지금 바로 구매하기 버튼 클릭!',
      raw: '제품이 너무나도 좋아요 세상 쓸만하네요.\n\n{https://s3.ap-northeast-2.amazonaws.com/www.alpha.7renders.com-images/temp/reviewer1_product_1.jpg} \n\n 이 사진은 제가 제일 좋아하는 사진 이랍니다. \n\n {https://s3.ap-northeast-2.amazonaws.com/www.alpha.7renders.com-images/temp/reviewer1_product_2.jpg} \n\n 어때요 여러분들 쓰고싶죠? \n\n {https://s3.ap-northeast-2.amazonaws.com/www.alpha.7renders.com-images/temp/reviewer1_product_3.jpg} \n\n 그렇다면 지금 바로 구매하기 버튼 클릭!',
      reviews: [
        { type: 'text', content: '제품이 너무나도 좋아요 세상 쓸만하네요.\n\n' },
        { type: 'img', content: 'https://s3.ap-northeast-2.amazonaws.com/www.alpha.7renders.com-images/temp/reviewer1_product_1.jpg' },
        { type: 'text', content: '\n\n 이 사진은 제가 제일 좋아하는 사진 이랍니다. \n\n' },
        { type: 'img', content: 'https://s3.ap-northeast-2.amazonaws.com/www.alpha.7renders.com-images/temp/reviewer1_product_2.jpg' },
        { type: 'text', content: '\n\n 어때요 여러분들 쓰고싶죠?  \n\n' },
        { type: 'img', content: 'https://s3.ap-northeast-2.amazonaws.com/www.alpha.7renders.com-images/temp/reviewer1_product_3.jpg' },
        { type: 'text', content: '\n\n 그렇다면 지금 바로 구매하기 버튼 클릭!' },
      ],
      res: [],
    }
  },
  created() {
    this.res = this.reviewParsing(this.raw);
  },
  methods: {
    reviewParsing: (reviewString) => {
      const res = [];
      let bs = 0;
      let be = 0;
      for(let idx = 0; idx < reviewString.length; idx++) {
        if (idx === reviewString.length - 1) {
          let type;
          if (reviewString[idx] === '}') type = 'img';
          else type = 'txt';
          // console.log(`마지막: ${reviewString.substring(bs >= be ? bs + 1 : be + 1, idx)}`)
          res.push({
            type,
            content: reviewString.substring(bs >= be ? bs + 1 : be + 1, idx),
          });
          break;
        }
        // 여기까지 문자
        if (reviewString[idx] === '{') {
          if (bs !== idx) {
            bs = idx;
            // console.log(`문자: ${reviewString.substring(be + 1, bs)}`);
            res.push({
              type: 'txt',
              content: reviewString.substring(be + 1, bs),
            })
          }
        }
        // 여기까지 이미지
        if (reviewString[idx] === '}') {
          be = idx;
          // console.log(`이미지: ${reviewString.substring(bs + 1, be)}`);
          res.push({
            type: 'img',
            content: reviewString.substring(bs + 1, be),
          })
        }
      }
      return res;
    }
  },
}
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  .raw {
    .review {
      color: #222222;
      font-size: 15px;
      line-height: 20px;
      word-break: keep-all;
      white-space: pre-line;
    }
  }
  .reviews {
    .img {

    }
    .text {
      color: #222222;
      font-size: 15px;
      line-height: 20px;
      word-break: keep-all;
      white-space: pre-line;
    }
  }
}
</style>
