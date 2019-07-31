<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      <v-flex xs12>
    
      </v-flex>

      <v-flex mb-4>

        <div v-bind:style="{ 'background-color': 'red' }">
          <img style="width: 100px; height: 100px;" src="../assets/tgif_logo.png" alt="">
        </div>
        <div>
          <img id="order" style="width: 50px; height: 50px;" @click="order" src="../assets/order.png" alt=""><p>{{ count }}</p>
          <img id="reset" style="width: 50px; height: 50px;" @click="reset" src="../assets/reset.png" alt=""></img>
        </div>
        
        <slick ref="slick" :options="slickOptions">
          <a><img style="width: 200px; height: 200px;" @click="counter_1" src="../assets/steak.jpeg" alt=""></img></a>
          <a><img style="width: 200px; height: 200px;" @click="counter_2" src="../assets/steak.jpeg" alt=""></img></a>
          <a><img style="width: 200px; height: 200px;" @click="counter_3" src="../assets/steak.jpeg" alt=""></img></a>
          <a><img style="width: 200px; height: 200px;" @click="counter_4" src="../assets/steak.jpeg" alt=""></img></a>
          <a><img style="width: 200px; height: 00px;"  @click="counter_5"  src="../assets/steak.jpeg" alt=""></img></a>
        </slick>
      
         <div v-bind:style="{ 'background-color': 'red' }">
           <p> 선택 메뉴 :  요리1 ({{ count_1 }}) 개수 요리2 ({{ count_2 }}) 개수 요리3 ({{ count_3 }}) 개수
           요리4 ({{ count_4 }}) 개수 요리5 ({{ count_5 }}) 개수</p>
         </div>
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
            count_1: 0,
            count_2: 0,
            count_3: 0,
            count_4: 0,
            count_5: 0,
            slickOptions: {
                slidesToShow: 3,
                // Any other options that can be got from plugin documentation

            },
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
          this.count_1 = 0;
          this.count_2 = 0;
          this.count_3 = 0;
          this.count_4 = 0;
          this.count_5 = 0;
        },
        counter: function () {
          this.count++;
        },
        counter_1: function () {
          this.count_1++;
          this.count++;
        },
        counter_2: function () {
          this.count_2++;
          this.count++;
        },
        counter_3: function () {
          this.count_3++;
          this.count++;
        },
        counter_4: function () {
          this.count_4++;
          this.count++;
        },
        counter_5: function () {
          this.count_5++;
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
