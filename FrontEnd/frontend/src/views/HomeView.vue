<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      <v-flex xs12>
    
      </v-flex>

      <v-flex mb-4>
<!-- 
        <div v-bind:style="{ 'background-color': 'red' }">
          <img style="width: 100px; height: 100px;" src="../assets/tgif_logo.png" alt="">
        </div> -->
    <v-spacer></v-spacer>


        <div class="text-auto">
          <v-badge>
            <template v-slot:badge>{{ count }}</template>
            <v-icon>cart</v-icon>
          </v-badge>
        </div>  
      <!-- <v-toolbar-items>
      <img id="order" style="width: 50px; height: 50px;" @click="order" src="../assets/order.png" alt=""><p>{{ count }}</p>
      <img id="reset" style="width: 50px; height: 50px;" @click="reset" src="../assets/reset.png" alt="">
    </v-toolbar-items> -->
        <!-- <slick v-for="val in listData" ref="slick" :options="slickOptions">
          <a><img v-bind:src="val.img" style="width: 200px; height: 200px;" @click="counter_1" alt=""></a>
        </slick> -->
        <!-- style="width: 200px; height: 200px;" -->

        <div v-bind:style="{ 'padding': '1vw', 'background-color':  '#F4511E' ,'font-size' : '30px'}">
          <p>스테이크&립</p>
        </div>
        <slick ref="slick" :options="slickOptions">
           <a><img src="https://postfiles.pstatic.net/MjAxOTA4MDFfODEg/MDAxNTY0NjM0MDg5MzM4.P4RL6ANQTrhHZTrLhbg7TWgkKSBqyg-GHM7jACI2twkg.tV56irLsYISIj7eNa93120nlTN0M1RkUOzBhRicOcj4g.PNG.momoqqq311/시그니처스테이크쉬림프.PNG?type=w773"
            style="width: 100%; height:  100%;" @click="counter_1_1" alt="40000원"></a>
           <a><img src="https://mblogthumb-phinf.pstatic.net/MjAxOTA4MDFfMTk2/MDAxNTY0NjM0MDg5MTQ2.ZvEJVkhsOG1L8q3pvNeg8R0aSVy40sVS2kuYwzaUYyYg.YoElor7Imrh3x8kqsje709imIqqH_Oe0zskyn41wNbEg.PNG.momoqqq311/뉴욕스트립스페이크.PNG?type=w800"
            style="width: 100%; height:  100%;" @click="counter_1_2" alt="35000원"></a>
           <a><img src="https://mblogthumb-phinf.pstatic.net/MjAxOTA4MDFfOTIg/MDAxNTY0NjM0MDg5NDQ3.7hmNsu5S6BBST3cD0S9EPM-jXh-qUieu-_e0bW0dhv8g.Xxi8NuU5jNgTgSosOO0QhGFrRfrexDlT5vMDJCsyRTAg.PNG.momoqqq311/엠파이어스테이크with본인립아이.PNG?type=w800"
           style="width: 100%; height:  100%;" @click="counter_1_3" alt="65000원"></a>
           <a><img src="https://mblogthumb-phinf.pstatic.net/MjAxOTA4MDFfNDQg/MDAxNTY0NjM0MDkwMTIz.AdmFEq55OwJHwZ9RZKwAGEpH5fw1XIR6wr6rtui7G8Eg.lFwEMBQMwTK7wRsxYI3Vc-WW52Ds5Rs0vJYTHdEcRIQg.PNG.momoqqq311/시그니처글레이즈드립.PNG?type=w800"
           style="width: 100%; height:  100%;" @click="counter_1_4" alt=""></a>
           <a><img src="https://mblogthumb-phinf.pstatic.net/MjAxOTA4MDFfMTgg/MDAxNTY0NjM0MDg5MzMx.QeKKVlWiNs1GekkBls8Bou8Z-h50HySSFJAQpm5KBJQg.eawFGEBHC5DLh9gZVgp_hmnLqYlzWMlIx6Vtp13y9LUg.PNG.momoqqq311/시그니처립쉬림프.PNG?type=w800" 
            style="width: 100%; height:  100%;" @click="counter_1_5" alt=""></a>
        </slick>

        <div v-bind:style="{ 'padding': '1vw', 'background-color':  '#F4511E' ,'font-size' : '30px'}">
          <p>파스타</p>
        </div>
        <slick ref="slick" :options="slickOptions">
           <a><img src="https://postfiles.pstatic.net/MjAxOTA4MDFfMTE1/MDAxNTY0NjM0Njk3MzY3.3gy8ph3Rv1qkkE_-HEiFQ73wECOsc1kqwCUYomQj4Hog.8Nt4PfMd7km_a5VDYY_cn6940dQaXYPD0sKIy5adqv4g.PNG.momoqqq311/쉐차안쉬림프파스타.PNG?type=w773"
           style="width: 100%; height:  100%;" @click="counter_2_1" alt=""></a>
           <a><img src="https://postfiles.pstatic.net/MjAxOTA4MDFfMTE1/MDAxNTY0NjM0Njk3MzY3.3gy8ph3Rv1qkkE_-HEiFQ73wECOsc1kqwCUYomQj4Hog.8Nt4PfMd7km_a5VDYY_cn6940dQaXYPD0sKIy5adqv4g.PNG.momoqqq311/쉐차안쉬림프파스타.PNG?type=w773"
           style="width: 100%; height:  100%;" @click="counter_2_2" alt=""></a>
           <a><img src="https://postfiles.pstatic.net/MjAxOTA4MDFfMTIy/MDAxNTY0NjM0Njk3MzE3.bMeLlLCu2xU7WD34Z35mmfZ8FeT1IJSkSdQFa3YQUcog.oyr20X8mWQw1Kg9aoNtbL7Kt2_tWoEEgu9JjBeLAO0Ag.PNG.momoqqq311/케이준쉬림프치킨파스타.PNG?type=w773"
           style="width: 100%; height:  100%;" @click="counter_2_3" alt=""></a>
           <a><img src="https://postfiles.pstatic.net/MjAxOTA4MDFfMTA3/MDAxNTY0NjM0Njk3MzAw.4s2xV-myRCd-DP3bsYBOydBc9cAr9mlw_bNJQ-Ngj8Ug.jA5SoE7pC0rLGjtCtOwSVpl3lFd8RJXSsQwLFM4zFEYg.PNG.momoqqq311/크리미버팔로치킨파스타.PNG?type=w773"
            style="width: 100%; height:  100%;" @click="counter_2_4" alt=""></a>
           <a><img src="https://postfiles.pstatic.net/MjAxOTA4MDFfMTM4/MDAxNTY0NjM0Njk3MzQ5.Bhd8GblclKnKJkAIMR5WdCeV4kdwjrZAxiN7GRHVAmsg.g6vVkUFRqdiakuJB_ztuKAtihvUSDJQDipaCygOpbRwg.PNG.momoqqq311/씨푸트마리나라.PNG?type=w773" 
            style="width: 100%; height:  100%;" @click="counter_2_5" alt=""></a>
        </slick>

        <div v-bind:style="{ 'padding': '1vw', 'background-color':  '#F4511E' ,'font-size' : '30px'}">
          <p>샐러드</p>
        </div>
        <slick ref="slick" :options="slickOptions">
           <a><img src="https://postfiles.pstatic.net/MjAxOTA4MDFfMTAg/MDAxNTY0NjM1MTQ0ODQ5.8KWWLDKqXICYM5825gAtDdBUUdjiwlDCy-MaHzn4Szgg.uC_LIHYjscAQV-OYYgYpx_muxWQlbc8e_d4gP9Ubyw8g.PNG.momoqqq311/스테이크샐러드.PNG?type=w773"
           style="width: 100%; height:  100%;" @click="counter_3_1" alt=""></a>
           <a><img src="https://postfiles.pstatic.net/MjAxOTA4MDFfMTc3/MDAxNTY0NjM1MTQ0Mjgz.1ROXn_YXl2q8_rHKHQW4vUJcPvJWSsbQpy7C0HA-zzIg.iOm_f8dnbPvCSGsSkXw3u_pSBxIV1aH9Xn5_q9VamGog.PNG.momoqqq311/깔립소깔라마리샐러드.PNG?type=w773"
           style="width: 100%; height:  100%;" @click="counter_3_2" alt=""></a>
           <a><img src="https://postfiles.pstatic.net/MjAxOTA4MDFfNDAg/MDAxNTY0NjM1MTQ0ODg1._-FjR0HKKS4dFCQ-Ka8nkzg-J5EkAc24cN0h8HxfSNEg.LcKTLy5MU1ofm8H4oP2hL8blMdgqqf8RceZq60xKin0g.PNG.momoqqq311/상하이치킨샐러드.PNG?type=w773"
          style="width: 100%; height:  100%;" @click="counter_3_3" alt=""></a>
           <a><img src="https://postfiles.pstatic.net/MjAxOTA4MDFfMjU2/MDAxNTY0NjM1MTQ0NjAz.3y6mXcaG9fnN5L3lDzqPVgMAriivCt9lpfT3cduHMJQg.j_4EIq9q7E6qpQ8Tc6daqFTwmcPDkFDCsvrH6z0FVwgg.PNG.momoqqq311/케이준후라이드치킨샐러드.PNG?type=w773"
           style="width: 100%; height:  100%;" @click="counter_3_4" alt=""></a>
        </slick>
      
        <div v-bind:style="{ 'padding': '1vw', 'background-color':  '#F4511E' ,'font-size' : '30px'}">
          <p>디저트</p>
        </div>
        <slick ref="slick" :options="slickOptions">
          <a><img src="https://postfiles.pstatic.net/MjAxOTA4MDFfMTMz/MDAxNTY0NjM1Mjk1NzU0.eLozryTy82UG3-j9PzwB1fXjXHFqzE_Es5WIIE8OSc4g.c3DlpAKSHIiYLU5TOQvSzBuUa9fuQe1AafR8GTDlOD0g.PNG.momoqqq311/아이스크림또는셔벗.PNG?type=w773"
           style="width: 100%; height:  100%;" @click="counter_4_1" alt=""></a>
           <a><img src="https://postfiles.pstatic.net/MjAxOTA4MDFfMTM1/MDAxNTY0NjM1Mjk1NzYx.OkLUgeh4v1H_gmTX8GGKJcbpcU8_umG-W6TUSZtTjvYg.7gY45NIonHMoAJaOcSKgTq9u8bAJbrguhNwFCegy3Msg.PNG.momoqqq311/더블브라우니옵세션.PNG?type=w773"
          style="width: 100%; height:  100%;" @click="counter_4_2" alt=""></a>
        </slick>

         <!-- <div v-bind:style="{ 'background-color': 'red' }">
           <p> 선택 메뉴 :  요리1 ({{ count_1 }}) 개수 요리2 ({{ count_2 }}) 개수 요리3 ({{ count_3 }}) 개수
           요리4 ({{ count_4 }}) 개수 요리5 ({{ count_5 }}) 개수</p>
         </div> -->
      </v-flex>

      <v-flex>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
  import Slick from 'vue-slick'

  export default {

    name: 'app',
    data() {
        return {
            count: 0,
            count_1_1: 0,count_1_2: 0,count_1_3: 0,count_1_4: 0,count_1_5: 0,
            count_2_1: 0,count_2_2: 0,count_2_3: 0,count_2_4: 0,count_2_5: 0,
            count_3_1: 0,count_3_2: 0,count_3_3: 0,count_3_4: 0,
            count_4_1: 0,count_4_2: 0,
            slickOptions: {
                slidesToShow: 3,
                // Any other options that can be got from plugin documentation

            }
        };
    },
    components: { Slick },
    // All slick methods can be used too, example here
    methods: {
        next() {
            this.$refs.slick.next();
        },

        prev() {
            this.$refs.slick.prev();
        },

        reInit() {
            // Helpful if you have to deal with v-for to update dynamic lists
            this.$nextTick(() => {
                this.$refs.slick.reSlick();
            });
        },
        reset: function () {
          this.count = 0;
          this.count_1_1 = 0;
          this.count_1_2 = 0;
          this.count_1_3 = 0;
          this.count_1_4 = 0;
          this.count_1_5 = 0;
          this.count_2_1 = 0;
          this.count_2_2 = 0;
          this.count_2_3 = 0;
          this.count_2_4 = 0;
          this.count_2_5 = 0;
          this.count_3_1 = 0;
          this.count_3_2 = 0;
          this.count_3_3 = 0;
          this.count_3_4 = 0;
          this.count_4_1 = 0;
          this.count_4_2 = 0;
        },
        counter: function () {
          this.count++;
        },
        counter_1_1: function () {
          this.count_1_1++;
          this.count++;
        },
        counter_1_2: function () {
          this.count_1_2++;
          this.count++;
        },
        counter_1_3: function () {
          this.count_1_3++;
          this.count++;
        },
        counter_1_4: function () {
          this.count_1_4++;
          this.count++;
        },
        counter_1_5: function () {
          this.count_1_5++;
          this.count++;
        },
        counter_2_1: function () {
          this.count_2_1++;
          this.count++;
        },
        counter_2_2: function () {
          this.count_2_2++;
          this.count++;
        },
        counter_2_3: function () {
          this.count_2_3++;
          this.count++;
        },
        counter_2_4: function () {
          this.count_2_4++;
          this.count++;
        },
        counter_2_5: function () {
          this.count_2_5++;
          this.count++;
        },
        counter_3_1: function () {
          this.count_3_1++;
          this.count++;
        },
        counter_3_2: function () {
          this.count_3_2++;
          this.count++;
        },
        counter_3_3: function () {
          this.count_3_3++;
          this.count++;
        },
        counter_3_4: function () {
          this.count_3_4++;
          this.count++;
        },
        counter_4_1: function () {
          this.count_4_1++;
          this.count++;
        },
        counter_4_2: function () {
          this.count_4_2++;
          this.count++;
        },
        order: function () {
          this.$router.push({ name: 'cart', 
            params: [
              {food_name: '' ,amount: 1},
              {food_name: '' ,amount: 2},
              {food_name: '' ,amount: 3},
              {food_name: '' ,amount: 4},
              {food_name: '' ,amount: 5}
            ]
          })
        }
    },
}
</script>

<style scoped>
  @import '../../node_modules/slick-carousel/slick/slick.css'

</style>
