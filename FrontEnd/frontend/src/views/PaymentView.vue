<template>
  <div class="payment">
    <h3>장바구니</h3>
    <table class="cart-table">
      <tr>
        <td class="table-td">No.</td>
        <td class="table-td">사진</td>
        <td class="table-td">이름</td>
        <td class="table-td">수량</td>
        <td class="table-td">삭제</td>
      </tr>

      <tr v-for="val in this.listData" v-bind:key = "val.id" >
        <td>{{val.id}}</td>
        <td>{{val.img}}</td>
        <td>{{val.name}}</td>
        <td>{{val.amount}}</td>
        <td class="table-td"><v-btn>삭제</v-btn></td>
      </tr>


    </table>


      <div class="accept">
          <v-btn @click="nfcpay">nfc결제</v-btn>
          <v-btn @click="localpay">현장결제</v-btn>
      </div>


  </div>


</template>

<script>
//import Payment from '../components/Payment';

export default {
    data() {
        return {
            listData:[
                {
                    id:1,
                    img:"i1",
                    name:"바질 파스타",
                    amount:1
                },{
                    id:2,
                    img:"i2",
                    name:"양갈비 스테이크",
                    amount:2
                },{
                    id:3,
                    img:"i3",
                    name:"폭립",
                    amount:1
                },{
                    id:4,
                    img:"i4",
                    name:"콜라",
                    amount:2
                }
            ]
        }
    },
    methods: {
        nfcpay: function () {
            //todo
            // post to backend server "nfc"
            this.$router.push('/about')
        },
        localpay: function () {
            //todo
            // post to backend server "nfc"
            this.$router.push('/about')
        }

    }

};
</script>

<style>
  table {
    width: 100%;
    border: 1px solid #444444;
  }
  th, td {
    border: 1px solid #444444;
  }
</style>
