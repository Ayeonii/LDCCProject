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
        <div>
          <img id="order" style="width: 50px; height: 50px;" @click="order" src="../assets/order.png" alt=""><p>{{ count }}</p>
        </div>
        <div>
          <img id="reset" style="width: 50px; height: 50px;" @click="reset" src="../assets/reset.png" alt="">
        </div>
        
        <!-- <slick v-for="val in listData" ref="slick" :options="slickOptions">
          <a><img v-bind:src="val.img" style="width: 200px; height: 200px;" @click="counter_1" alt=""></a>
        </slick> -->

        <div v-bind:style="{ 'background-color': 'red' }">
          <p>스테이크&립</p>
        </div>
        <slick ref="slick" :options="slickOptions">
           <a><img src="https://postfiles.pstatic.net/MjAxOTA4MDFfODEg/MDAxNTY0NjM0MDg5MzM4.P4RL6ANQTrhHZTrLhbg7TWgkKSBqyg-GHM7jACI2twkg.tV56irLsYISIj7eNa93120nlTN0M1RkUOzBhRicOcj4g.PNG.momoqqq311/시그니처스테이크쉬림프.PNG?type=w773"
           style="width: 200px; height: 200px;" @click="counter_1_1" alt="40000원"></a>
           <a><img src="https://mblogthumb-phinf.pstatic.net/MjAxOTA4MDFfMTk2/MDAxNTY0NjM0MDg5MTQ2.ZvEJVkhsOG1L8q3pvNeg8R0aSVy40sVS2kuYwzaUYyYg.YoElor7Imrh3x8kqsje709imIqqH_Oe0zskyn41wNbEg.PNG.momoqqq311/뉴욕스트립스페이크.PNG?type=w800"
           style="width: 200px; height: 200px;" @click="counter_1_2" alt="35000원"></a>
           <a><img src="https://mblogthumb-phinf.pstatic.net/MjAxOTA4MDFfOTIg/MDAxNTY0NjM0MDg5NDQ3.7hmNsu5S6BBST3cD0S9EPM-jXh-qUieu-_e0bW0dhv8g.Xxi8NuU5jNgTgSosOO0QhGFrRfrexDlT5vMDJCsyRTAg.PNG.momoqqq311/엠파이어스테이크with본인립아이.PNG?type=w800"
           style="width: 200px; height: 200px;" @click="counter_1_3" alt="65000원"></a>
           <a><img src="https://mblogthumb-phinf.pstatic.net/MjAxOTA4MDFfNDQg/MDAxNTY0NjM0MDkwMTIz.AdmFEq55OwJHwZ9RZKwAGEpH5fw1XIR6wr6rtui7G8Eg.lFwEMBQMwTK7wRsxYI3Vc-WW52Ds5Rs0vJYTHdEcRIQg.PNG.momoqqq311/시그니처글레이즈드립.PNG?type=w800"
            style="width: 200px; height: 200px;" @click="counter_1_4" alt="37000원"></a>
           <a><img src="https://mblogthumb-phinf.pstatic.net/MjAxOTA4MDFfMTgg/MDAxNTY0NjM0MDg5MzMx.QeKKVlWiNs1GekkBls8Bou8Z-h50HySSFJAQpm5KBJQg.eawFGEBHC5DLh9gZVgp_hmnLqYlzWMlIx6Vtp13y9LUg.PNG.momoqqq311/시그니처립쉬림프.PNG?type=w800" 
            style="width: 200px; height: 200px;" @click="counter_1_5" alt="43500원"></a>
        </slick>

        <div v-bind:style="{ 'background-color': 'red' }">
          <p>파스타</p>
        </div>
        <slick ref="slick" :options="slickOptions">
           <a><img src="https://postfiles.pstatic.net/MjAxOTA4MDFfMTE1/MDAxNTY0NjM0Njk3MzY3.3gy8ph3Rv1qkkE_-HEiFQ73wECOsc1kqwCUYomQj4Hog.8Nt4PfMd7km_a5VDYY_cn6940dQaXYPD0sKIy5adqv4g.PNG.momoqqq311/쉐차안쉬림프파스타.PNG?type=w773"
           style="width: 200px; height: 200px;" @click="counter_2_1" alt="21000원"></a>
           <a><img src="https://postfiles.pstatic.net/MjAxOTA4MDFfMTIy/MDAxNTY0NjM0Njk3MzE3.bMeLlLCu2xU7WD34Z35mmfZ8FeT1IJSkSdQFa3YQUcog.oyr20X8mWQw1Kg9aoNtbL7Kt2_tWoEEgu9JjBeLAO0Ag.PNG.momoqqq311/케이준쉬림프치킨파스타.PNG?type=w773"
           style="width: 200px; height: 200px;" @click="counter_2_2" alt="19500원"></a>
           <a><img src="https://postfiles.pstatic.net/MjAxOTA4MDFfMTA3/MDAxNTY0NjM0Njk3MzAw.4s2xV-myRCd-DP3bsYBOydBc9cAr9mlw_bNJQ-Ngj8Ug.jA5SoE7pC0rLGjtCtOwSVpl3lFd8RJXSsQwLFM4zFEYg.PNG.momoqqq311/크리미버팔로치킨파스타.PNG?type=w773"
            style="width: 200px; height: 200px;" @click="counter_2_3" alt="17000원"></a>
           <a><img src="https://postfiles.pstatic.net/MjAxOTA4MDFfMTM4/MDAxNTY0NjM0Njk3MzQ5.Bhd8GblclKnKJkAIMR5WdCeV4kdwjrZAxiN7GRHVAmsg.g6vVkUFRqdiakuJB_ztuKAtihvUSDJQDipaCygOpbRwg.PNG.momoqqq311/씨푸트마리나라.PNG?type=w773" 
            style="width: 200px; height: 200px;" @click="counter_2_4" alt="20500원"></a>
        </slick>

        <div v-bind:style="{ 'background-color': 'red' }">
          <p>샐러드</p>
        </div>
        <slick ref="slick" :options="slickOptions">
           <a><img src="https://postfiles.pstatic.net/MjAxOTA4MDFfMTAg/MDAxNTY0NjM1MTQ0ODQ5.8KWWLDKqXICYM5825gAtDdBUUdjiwlDCy-MaHzn4Szgg.uC_LIHYjscAQV-OYYgYpx_muxWQlbc8e_d4gP9Ubyw8g.PNG.momoqqq311/스테이크샐러드.PNG?type=w773"
           style="width: 200px; height: 200px;" @click="counter_3_1" alt="17000원"></a>
           <a><img src="https://postfiles.pstatic.net/MjAxOTA4MDFfMTc3/MDAxNTY0NjM1MTQ0Mjgz.1ROXn_YXl2q8_rHKHQW4vUJcPvJWSsbQpy7C0HA-zzIg.iOm_f8dnbPvCSGsSkXw3u_pSBxIV1aH9Xn5_q9VamGog.PNG.momoqqq311/깔립소깔라마리샐러드.PNG?type=w773"
           style="width: 200px; height: 200px;" @click="counter_3_2" alt="19500원"></a>
           <a><img src="https://postfiles.pstatic.net/MjAxOTA4MDFfNDAg/MDAxNTY0NjM1MTQ0ODg1._-FjR0HKKS4dFCQ-Ka8nkzg-J5EkAc24cN0h8HxfSNEg.LcKTLy5MU1ofm8H4oP2hL8blMdgqqf8RceZq60xKin0g.PNG.momoqqq311/상하이치킨샐러드.PNG?type=w773"
           style="width: 200px; height: 200px;" @click="counter_3_3" alt="18500원"></a>
           <a><img src="https://postfiles.pstatic.net/MjAxOTA4MDFfMjU2/MDAxNTY0NjM1MTQ0NjAz.3y6mXcaG9fnN5L3lDzqPVgMAriivCt9lpfT3cduHMJQg.j_4EIq9q7E6qpQ8Tc6daqFTwmcPDkFDCsvrH6z0FVwgg.PNG.momoqqq311/케이준후라이드치킨샐러드.PNG?type=w773"
            style="width: 200px; height: 200px;" @click="counter_3_4" alt="21500원"></a>
        </slick>
      
        <div v-bind:style="{ 'background-color': 'red' }">
          <p>디저트</p>
        </div>
        <slick ref="slick" :options="slickOptions">
          <a><img src="https://postfiles.pstatic.net/MjAxOTA4MDFfMTMz/MDAxNTY0NjM1Mjk1NzU0.eLozryTy82UG3-j9PzwB1fXjXHFqzE_Es5WIIE8OSc4g.c3DlpAKSHIiYLU5TOQvSzBuUa9fuQe1AafR8GTDlOD0g.PNG.momoqqq311/아이스크림또는셔벗.PNG?type=w773"
           style="width: 200px; height: 200px;" @click="counter_4_1" alt="6300원"></a>
           <a><img src="https://postfiles.pstatic.net/MjAxOTA4MDFfMTM1/MDAxNTY0NjM1Mjk1NzYx.OkLUgeh4v1H_gmTX8GGKJcbpcU8_umG-W6TUSZtTjvYg.7gY45NIonHMoAJaOcSKgTq9u8bAJbrguhNwFCegy3Msg.PNG.momoqqq311/더블브라우니옵세션.PNG?type=w773"
           style="width: 200px; height: 200px;" @click="counter_4_2" alt="7200원"></a>
        </slick>

         <!-- <div v-bind:style="{ 'background-color': 'red' }">
           <p> 선택 메뉴 :  요리1 ({{ steak[0] }}) 개수 요리2 ({{ steak[1] }}) 개수 요리3 ({{ steak[2] }}) 개수
           요리4 ({{ steak[3] }}) 개수 요리5 ({{ steak[4] }}) 개수</p>
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
            steak :[0,0,0,0,0],
            steak_name :["시그니처스테이크쉬림프", "뉴욕스트립스테이크", "엠파이어스테이크with본인립아이", "시그니처글레이즈드립", "시그니처립쉬림프"],
            steak_price :[40000, 35000, 65000, 37000, 43500],
            pasta :[0,0,0,0],
            pasta_name :["쉐차안쉬림프파스타", "케이준쉬림프치킨파스타", "크리미버팔로치킨파스타", "씨푸트마리나라"],
            pasta_price :[21000, 19500, 65000, 17000, 20500],
            salad :[0,0,0,0],
            salad_name :["스테이크샐러드", "깔립소깔라마리샐러드", "상하이치킨샐러드", "케이준후라이드치킨샐러드"],
            salad_price :[17000, 19500, 65000, 18500, 21500],
            dessert : [0,0],
            dessert_name :["아이스크림또는셔벗","더블브라우니옵세션"],
            dessert_price :[6300, 7200],
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
          this.steak[0] = 0;
          this.steak[1] = 0;
          this.steak[2] = 0;
          this.steak[3] = 0;
          this.steak[4] = 0;
          this.pasta[0] = 0;
          this.pasta[1] = 0;
          this.pasta[2] = 0;
          this.pasta[3] = 0;
          this.salad[0] = 0;
          this.salad[1] = 0;
          this.salad[2] = 0;
          this.salad[3] = 0;
          this.dessert[0] = 0;
          this.dessert[1] = 0;
        },
        counter: function () {
          this.count++;
        },
        counter_1_1: function () {
          this.steak[0]++;
          this.count++;
        },
        counter_1_2: function () {
          this.steak[1]++;
          this.count++;
        },
        counter_1_3: function () {
          this.steak[2]++;
          this.count++;
        },
        counter_1_4: function () {
          this.steak[3]++;
          this.count++;
        },
        counter_1_5: function () {
          this.steak[4]++;
          this.count++;
        },
        counter_2_1: function () {
          this.pasta[0]++;
          this.count++;
        },
        counter_2_2: function () {
          this.pasta[1]++;
          this.count++;
        },
        counter_2_3: function () {
          this.pasta[2]++;
          this.count++;
        },
        counter_2_4: function () {
          this.pasta[3]++;
          this.count++;
        },
        counter_3_1: function () {
          this.salad[0]++;
          this.count++;
        },
        counter_3_2: function () {
          this.salad[1]++;
          this.count++;
        },
        counter_3_3: function () {
          this.salad[2]++;
          this.count++;
        },
        counter_3_4: function () {
          this.salad[3]++;
          this.count++;
        },
        counter_4_1: function () {
          this.dessert[0]++;
          this.count++;
        },
        counter_4_2: function () {
          this.dessert[1]++;
          this.count++;
        },
        order: function () {
          var params = [];

          for (var i = 0; i < 5; i += 1) 
          {
            if(this.steak[i] > 0) 
            {
              // params+=
              params.push(

                {
                  name: this.steak_name[i],
                  price: this.steak_price[i],
                  amount: this.steak[i]
                }
                );
            }
          }

           for (var i = 0; i < 4; i += 1) 
          {
            if(this.pasta[i] > 0) 
            {
              // params+=
              params.push(

                {
                  name: this.pasta_name[i],
                  price: this.pasta_price[i],
                  amount: this.pasta[i]
                }
                );

            }
          }

           for (var i = 0; i < 4; i += 1) 
          {
            if(this.salad[i] > 0) 
            {
              // params+=
              params.push(

                {
                  name: this.salad_name[i],
                  price: this.salad_price[i],
                  amount: this.salad[i]
                }
                );
            }
          }

           for (var i = 0; i < 2; i += 1) 
          {
            if(this.dessert[i] > 0) 
            {
              params.push(
                {
                  name: this.dessert_name[i],
                  price: this.dessert_price[i],
                  amount: this.dessert[i]
                }
                );
            }
          }
              console.log(params);
          this.$router.push({ name: 'cart', params})
        }
    },
}
</script>

<style scoped>
  @import '../../node_modules/slick-carousel/slick/slick.css'

</style>
