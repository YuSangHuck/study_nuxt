<template>
  <section class="container">
    <nuxt-link to="/">home</nuxt-link>
    <br><br>
    <p>원본</p>
    <template v-for="(raw, idx) in raws">
      <p :key="raw.id"><strong>{{ idx }}</strong></p>
      <div class="raw" :key="raw.id">
        <p class="review">{{ raw }}</p>
      </div>
    </template>
    <br><br>
    <p>파싱 실제 결과</p>
    <div class="reviews">
      <template class="review" v-for="(res, idx) in ress">
        <p :key="res.id"><strong>{{ idx }}</strong></p>
        <template class="review" v-for="re in res">
          <p class="text" v-if="re.type === 'txt'" :key="re.id">{{ re.content }}</p>
          <img class="img" v-else :src="re.content" alt="" :key="re.id"/>
        </template>
      </template>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      raws: [
        "제품이 너무나도 좋아요 세상 쓸만하네요.\n\n{https://s3.ap-northeast-2.amazonaws.com/www.alpha.7renders.com-images/temp/reviewer1_product_1.jpg} \n\n 이 사진은 제가 제일 좋아하는 사진 이랍니다. \n\n {https://s3.ap-northeast-2.amazonaws.com/www.alpha.7renders.com-images/temp/reviewer1_product_2.jpg} \n\n 어때요 여러분들 쓰고싶죠? \n\n {https://s3.ap-northeast-2.amazonaws.com/www.alpha.7renders.com-images/temp/reviewer1_product_3.jpg} \n\n 그렇다면 지금 바로 구매하기 버튼 클릭!",
        "{ https://s3.ap-northeast-2.amazonaws.com/www.alpha.7renders.com-images/influence_review_1.jpg }\n<❤️바이오리 L-아르지닌 브이스틱 공동구매 OPEN❤️>\n\n제가 정말 혈액순환이 너무 취약해서 매일 아침마다 얼굴이 퉁퉁 붓고, \n저녁 되면 여유있던 바지가 꽉끼는 등, \n매일 스트레칭 하기도 너무 힘들고 혈액순환 개선제 센시* 제품도 먹었었는데 \n가격이 너무 비싸서 꾸준히 먹지를 못하겠더라고요. \n\n-\n\n바이오리는 제가 콜라겐 음료로 처음 접했었는데 \n이번에 브이스틱이 새로 출시 된다고 해서 제가 출시 전부터 \n이건 진짜 제가 꼭 필요한 거라고 공구 진행 안 하더라도 제가 먹고 싶다고 했었어요. \n\n-\n현재 이거 먹고 아침 붓기도 빨리 빠지고 저녁 되어도 다리 붓기도 덜해요. \n저는 어머니랑 같이 나눠서 먹고 있고, \n맛도 청포도 맛이라 무슨 청포도 곤약 젤리 먹는 것 같아요! \n\n엄마가 왜이렇게 맛있냐고 잘 챙겨드세요 : )? \n아마 지금 이거 출시 하자마자 최저가로 진행하는 건 현재 저 밖에 없을 거에요..❤️\n{ https://s3.ap-northeast-2.amazonaws.com/www.alpha.7renders.com-images/influence_review_2.jpg }\n{ https://s3.ap-northeast-2.amazonaws.com/www.alpha.7renders.com-images/influence_review_3.jpg }\n✔️공구 날짜- 6/20(목)-22(토) 3일\n-\n✔️제품 구성&가격\n-\n1box* 7개입\n1. 1주치 (2box) /정가 24,000?? 13%??20,900\n2. 1개월치 (4box) / 96,000?? 27%??69,800\n3. 3개월치 (24box)/ 288,000?? 31%??198,000\n4. 6개월치 (44box) / 576,000?? 34%??379,000\n{ https://s3.ap-northeast-2.amazonaws.com/www.alpha.7renders.com-images/influence_review_4.jpg }\n?어떤 사람들이 먹어야 하나요?\n성형 수술하신 분, 저녁 되면 다리가 붓는 분, \n직장에서 한 자세로 오래 앉아 계시는 분, \n아침에 유독 얼굴이 둥그러신 분, \n손발이 차가운 편이신 분, \n출산 후 부종 관리가 필요하신 분, \n일상이 피로하신 분\n\n\n?어떤 효과가 있나요?\n일상 속 피로 제거, 붓기 감소, 활력 증진, 운동 효과 극대화 등의 효과가 있습니다.\n\n\n?붓기는 어떻게 뺄 수 있나요?\n붓기의 원인은 혈액순환 문제! \n그런 혈액순환을 도와주는데에 필요한 성분은 바로 'L-아르지닌' 입니다. \n브이스틱 1포에는 L-아르지닌이 7.2% 함유 되어 있습니다. \n그 외에 붓기에 도움을 주는 프리미엄 원료들 6가지가 함유 되어 있습니다.\n\n\n?어떻게 섭취하나요?\n하루에 2포, 아침 1개 저녁 1개 이렇게 섭취해주시면 됩니다. \n젤리 형태로 되어 있어서 따로 조리 할 필요 없습니다.\n\n?맛은 어떤가요?\n아르지닌의 쓴 맛을 최대한 느끼지 않게 하려고 맛있는 청포도 맛으로 제조했습니다. \n(전성분 표는 마지막 사진에 첨부)\n\n?구성/가격\n2주일 분/ 1개월 분/ 3개월 분/ 6개월 분 구성입니다\n(저는 6개월 분으로 사서 꾸준히 먹는 중이에요)\n현재 3,6개월 분이 제일 많이 나갑니다.\n\n\n\n<❤️바이오리 브이스틱 리얼 후기 모음❤️>\n\n{ https://s3.ap-northeast-2.amazonaws.com/www.alpha.7renders.com-images/influence_review_5.png }\n{ https://s3.ap-northeast-2.amazonaws.com/www.alpha.7renders.com-images/influence_review_6.png }\n{ https://s3.ap-northeast-2.amazonaws.com/www.alpha.7renders.com-images/influence_review_7.png }",
        "해당 블록체인은 강화된 계약(smart-contarct)를 기반으로 신뢰 할 수 있는 데이터를 제공하고 \n제 3자 간의 자유로운 계약 형식을 제공한다는 점에서 발전 가능성이 큰 플랫폼으로 부상하고 있습니다. \n\n\n{ https://s3.ap-northeast-2.amazonaws.com/www.alpha.7renders.com-images/000_review1.jpg }\n<블록체인 산업 활성화를 위한 입법 과제 참석> \n\n{ https://s3.ap-northeast-2.amazonaws.com/www.alpha.7renders.com-images/001_review2.jpg }\n오른쪽에 있는 분이 회사 대표입니다. 열심히 돈벌어오시는 중이라고합니다 :) \n\n{ https://s3.ap-northeast-2.amazonaws.com/www.alpha.7renders.com-images/002_CoinAll.jpg }\n이건 최근에 그래프입니다. 많이 올랐네요",
      ],
      ress: [],
    }
  },
  created() {
    this.ress = this.raws.map((item) => {
      return this.parse(item);
    })
  },
  methods: {
    // reviewParsing: (reviewString) => {
    //   const res = [];
    //   let bs = 0;
    //   let be = 0;
    //   for(let idx = 0; idx < reviewString.length; idx++) {
    //     if (idx === reviewString.length - 1) {
    //       let type;
    //       if (reviewString[idx] === '}') type = 'img';
    //       else type = 'txt';
    //       // console.log(`마지막: ${reviewString.substring(bs >= be ? bs + 1 : be + 1, idx)}`)
    //       res.push({
    //         type,
    //         content: reviewString.substring(bs >= be ? bs + 1 : be + 1, idx),
    //       });
    //       break;
    //     }
    //     // 여기까지 문자
    //     if (reviewString[idx] === '{') {
    //       if (bs !== idx) {
    //         bs = idx;
    //         // console.log(`문자: ${reviewString.substring(be + 1, bs)}`);
    //         res.push({
    //           type: 'txt',
    //           content: reviewString.substring(be + 1, bs),
    //         })
    //       }
    //     }
    //     // 여기까지 이미지
    //     if (reviewString[idx] === '}') {
    //       be = idx;
    //       // console.log(`이미지: ${reviewString.substring(bs + 1, be)}`);
    //       res.push({
    //         type: 'img',
    //         content: reviewString.substring(bs + 1, be),
    //       })
    //     }
    //   }
    //   return res;
    // },
    parse: (reviewString) => {
      let raw = reviewString;
      const res = [];
      let bs = 0;
      let be = 0;
      while ((bs = raw.indexOf('{')) !== -1) {
        // '}'를 찾음
        be = raw.indexOf('}');
        // 텍스트가 있다면
        if (raw[0] !== '{') {
          // 텍스트 저장
          res.push({ type: 'txt', content: raw.substring(0, bs) });
        }
        // 이미지 저장
        res.push({ type: 'img', content: raw.substring(bs + 1, be) });
        // '}'까지 raw를 잘라냄.
        raw = raw.slice(be + 1);
      }
      // raw에 텍스트만 남아있는 상태. 걍 저장하면 됨.
      res.push({ type: 'txt', content: raw });
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
