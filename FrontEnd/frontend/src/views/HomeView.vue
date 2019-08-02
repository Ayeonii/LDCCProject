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

        <br>
        <div class="text-right" ><p>
          <v-badge >
            <template v-slot:badge>{{ count }}</template>
            <v-icon  @click="order" style=" borderRadius:100px; padding : 10px ;border: 0px solid ; background : #FFEBEE; color : #F4511E" >cart &nbsp; &nbsp; </v-icon>
          </v-badge>
          </p>
        </div>  

      <!-- <v-toolbar-items>
      <img id="order" style="width: 50px; height: 50px;" @click="order" src="../assets/order.png" alt=""><p>{{ count }}</p>
      <img id="reset" style="width: 50px; height: 50px;" @click="reset" src="../assets/reset.png" alt="">
    </v-toolbar-items> -->
        <!-- <slick v-for="val in listData" ref="slick" :options="slickOptions">
          <a><img v-bind:src="val.img" style="width: 200px; height: 200px;" @click="counter_1" alt=""></a>
        </slick> -->
        <!-- style="width: 200px; height: 200px;" -->
<br>
        <div v-bind:style="{  'background-color':  '#F4511E' ,'font-size' : '30px', 'font-weight': 'bold'}">
          <p style ="color:#FFCDD2">STEAK & RIB</p>
        </div>
        <slick ref="slick" :options="slickOptions">
           <a><img src="https://github.com/ruddls00114/images/blob/master/img/steak/%EC%8B%9C%EA%B7%B8%EB%8B%88%EC%B2%98%EC%8A%A4%ED%85%8C%EC%9D%B4%ED%81%AC&%EC%89%AC%EB%A6%BC%ED%94%84.PNG?raw=true"
            style="width: 100%; height:  100%; " @click="counter_1_1" alt="40000원"></a>
           <a><img src="https://github.com/ruddls00114/images/blob/master/img/steak/%EB%89%B4%EC%9A%95%EC%8A%A4%ED%8A%B8%EB%A6%BD%EC%8A%A4%ED%8E%98%EC%9D%B4%ED%81%AC.PNG?raw=true"
            style="width: 100%; height:  100%;" @click="counter_1_2" alt="35000원"></a>
           <a><img src="https://github.com/ruddls00114/images/blob/master/img/steak/%EC%8B%9C%EA%B7%B8%EB%8B%88%EC%B2%98%EA%B8%80%EB%A0%88%EC%9D%B4%EC%A6%88%EB%93%9C%EB%A6%BD.PNG?raw=true"
           style="width: 100%; height:  100%;" @click="counter_1_4" alt=""></a>
           <a><img src="https://github.com/ruddls00114/images/blob/master/img/steak/%EC%8B%9C%EA%B7%B8%EB%8B%88%EC%B2%98%EB%A6%BD&%EC%89%AC%EB%A6%BC%ED%94%84.PNG?raw=true" 
            style="width: 100%; height:  100%;" @click="counter_1_5" alt=""></a>
            <a><img src="https://github.com/ruddls00114/images/blob/master/img/steak/%EC%97%A0%ED%8C%8C%EC%9D%B4%EC%96%B4%EC%8A%A4%ED%85%8C%EC%9D%B4%ED%81%ACwith%EB%B3%B8%EC%9D%B8%EB%A6%BD%EC%95%84%EC%9D%B4.PNG?raw=true"
           style="width: 100%; height:  100%;" @click="counter_1_3" alt="65000원"></a>
        </slick>
  <br>
        <div v-bind:style="{  'background-color':  '#F4511E' ,'font-size' : '30px', 'font-weight': 'bold'}">
          <p style ="color:#FFCDD2"> PASTA </p>
        </div>
        <slick ref="slick" :options="slickOptions">
           <a><img src="https://github.com/ruddls00114/images/blob/master/img/pasta/%EB%AA%A8%EC%A7%9C%EB%A0%90%EB%9D%BC%ED%81%AC%EB%A6%BC%ED%8C%8C%EC%8A%A4%ED%83%80.PNG?raw=true"
           style="width: 100%; height:  100%;" @click="counter_2_1" alt=""></a>
           <a><img src="https://github.com/ruddls00114/images/blob/master/img/pasta/%EC%89%90%EC%B0%A8%EC%95%88%EC%89%AC%EB%A6%BC%ED%94%84%ED%8C%8C%EC%8A%A4%ED%83%80.PNG?raw=true"
           style="width: 100%; height:  100%;" @click="counter_2_2" alt=""></a>
           <a><img src="https://github.com/ruddls00114/images/blob/master/img/pasta/%EC%94%A8%ED%91%B8%ED%8A%B8%EB%A7%88%EB%A6%AC%EB%82%98%EB%9D%BC.PNG?raw=true"
           style="width: 100%; height:  100%;" @click="counter_2_3" alt=""></a>
           <a><img src="https://github.com/ruddls00114/images/blob/master/img/pasta/%EC%BC%80%EC%9D%B4%EC%A4%80%EC%89%AC%EB%A6%BC%ED%94%84&%EC%B9%98%ED%82%A8%ED%8C%8C%EC%8A%A4%ED%83%80.PNG?raw=true"
            style="width: 100%; height:  100%;" @click="counter_2_4" alt=""></a>
           <a><img src="https://github.com/ruddls00114/images/blob/master/img/pasta/%ED%81%AC%EB%A6%AC%EB%AF%B8%EB%B2%84%ED%8C%94%EB%A1%9C%EC%B9%98%ED%82%A8%ED%8C%8C%EC%8A%A4%ED%83%80.PNG?raw=true" 
            style="width: 100%; height:  100%;" @click="counter_2_5" alt=""></a>
        </slick>
<br>
        <div v-bind:style="{  'background-color':  '#F4511E' ,'font-size' : '30px',  'font-weight': 'bold'}">
          <p style ="color:#FFCDD2"> SALAD </p>
        </div>
        <slick ref="slick" :options="slickOptions">
           <a><img src="https://github.com/ruddls00114/images/blob/master/img/salad/%EA%B9%94%EB%A6%BD%EC%86%8C%EA%B9%94%EB%9D%BC%EB%A7%88%EB%A6%AC%EC%83%90%EB%9F%AC%EB%93%9C.PNG?raw=true"
           style="width: 100%; height:  100%;" @click="counter_3_1" alt=""></a>
           <a><img src="https://github.com/ruddls00114/images/blob/master/img/salad/%EC%83%81%ED%95%98%EC%9D%B4%EC%B9%98%ED%82%A8%EC%83%90%EB%9F%AC%EB%93%9C.PNG?raw=true"
           style="width: 100%; height:  100%;" @click="counter_3_2" alt=""></a>
           <a><img src="https://github.com/ruddls00114/images/blob/master/img/salad/%EC%8A%A4%ED%85%8C%EC%9D%B4%ED%81%AC%EC%83%90%EB%9F%AC%EB%93%9C.PNG?raw=true"
          style="width: 100%; height:  100%;" @click="counter_3_3" alt=""></a>
           <a><img src="https://github.com/ruddls00114/images/blob/master/img/salad/%EC%BC%80%EC%9D%B4%EC%A4%80%ED%9B%84%EB%9D%BC%EC%9D%B4%EB%93%9C%EC%B9%98%ED%82%A8%EC%83%90%EB%9F%AC%EB%93%9C.PNG?raw=true"
           style="width: 100%; height:  100%;" @click="counter_3_4" alt=""></a>
        </slick>
<br>
        <div v-bind:style="{ 'background-color':  '#F4511E' ,'font-size' : '30px',  'font-weight': 'bold'}">
          <p style ="color:#FFCDD2"> DESSERT </p>
        </div>
        <slick ref="slick" :options="slickOptions">
          <a><img src="https://github.com/ruddls00114/images/blob/master/img/dessert/%EB%8D%94%EB%B8%94%EB%B8%8C%EB%9D%BC%EC%9A%B0%EB%8B%88%EC%98%B5%EC%84%B8%EC%85%98.PNG?raw=true"
           style="width: 100%; height:  100%;" @click="counter_4_1" alt=""></a>
           <a><img src="https://github.com/ruddls00114/images/blob/master/img/dessert/%EC%95%84%EC%9D%B4%EC%8A%A4%ED%81%AC%EB%A6%BC%EB%98%90%EB%8A%94%EC%85%94%EB%B2%97.PNG?raw=true"
          style="width: 100%; height:  100%;" @click="counter_4_2" alt=""></a>
           <a><img src="https://github.com/ruddls00114/images/blob/master/img/dessert/%EB%8D%94%EB%B8%94%EB%B8%8C%EB%9D%BC%EC%9A%B0%EB%8B%88%EC%98%B5%EC%84%B8%EC%85%98.PNG?raw=true"
          style="width: 100%; height:  100%;" @click="counter_4_4" alt=""></a>
          <a><img src="https://github.com/ruddls00114/images/blob/master/img/dessert/%EC%95%84%EC%9D%B4%EC%8A%A4%ED%81%AC%EB%A6%BC%EB%98%90%EB%8A%94%EC%85%94%EB%B2%97.PNG?raw=true"
          style="width: 100%; height:  100%;" @click="counter_4_2" alt=""></a>
        </slick>
        
    
<!-- <br> -->
 <!-- <v-spacer style="border: 5px solid; color :#F4511E ;"></v-spacer> -->
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
        counter_4_3: function () {
          this.count++;
        },
        counter_4_4: function () {
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
