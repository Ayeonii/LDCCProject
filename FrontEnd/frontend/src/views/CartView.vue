<template>
  <div class="cart">
    <span>
      
      <v-btn text><a href= "/" ><img src="../assets/back.png" style="width: 30%; height: 30%;"></a> </v-btn>
    </span>
    <div>


    </div>
    <br />
    <br />
    <h2>&nbsp;&nbsp;&nbsp;&nbsp; 장바구니</h2>
    <br />    <br />  
    <table class="cart-table">
      <tr class="tr-name">
        <!-- <td class="table-td">No.</td> -->  
        <td class="table-td">사진</td>
        <td class="table-td">이름</td>
        <td class="table-td">수량</td>
        <td class="table-td">가격</td>
        <td class="table-td"></td>
      </tr>
      <tr v-for="val in listData" v-bind:key="val.id">
        <!-- <td>{{val.id}}</td> -->
        <td>
          <img v-bind:src="val.img"  />
        </td>
        <td>{{val.foodname}}</td>
        <td>{{val.foodamount}}</td>
        <td>{{val.foodprice}}</td>
        <td class="table-td">
          &nbsp;&nbsp;
          <v-btn class="tb-btn" @click="removeFood(val.id)">삭제</v-btn>
        </td>
        <!-- <td><a @click="removeMenu(val)">Remove</a></td>  -->
      </tr>
    </table>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <div class="pay-bnt">
      <v-btn class="pb" @click="nfcpay">nfc결제</v-btn>&nbsp;&nbsp;&nbsp;&nbsp;
      <v-btn class="pb" @click="snackbar = true">현장결제</v-btn>
      <br><br>
      <v-alert type="success" v-if="this.flag==1">
       {{this.customername}}님 !
       {{this.totalprice}}원 결제가 완료되었어요!
    </v-alert>
    <v-alert type="error" v-else-if="this.flag==2">
       {{this.customername}}님 !
       결제가 실패하였어요.....
    </v-alert>
    <v-alert type="error" v-else-if="this.flag==3">
      주문완료!
    </v-alert>
    <v-snackbar
        v-model="snackbar"
      >
        {{ text }}
        <v-btn
          color="pink"
          text
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </v-snackbar>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
// import CartModel from "../models/CartModel.js"
export default {
  data() {
    return {
      flag:0,
      customername : "",
      totalprice : "",
      listData: [
        {
          "id": 1,
          "img":
            "https://github.com/ruddls00114/images/blob/master/img/pasta/%EC%BC%80%EC%9D%B4%EC%A4%80%EC%89%AC%EB%A6%BC%ED%94%84&%EC%B9%98%ED%82%A8%ED%8C%8C%EC%8A%A4%ED%83%80.PNG?raw=true",
          "foodname": "케이준쉬림프치킨파스타",
          "foodprice": 19500,
          "foodamount": 2
        },
        {
          "id": 2,
          "img":
            "https://github.com/ruddls00114/images/blob/master/img/steak/%EB%89%B4%EC%9A%95%EC%8A%A4%ED%8A%B8%EB%A6%BD%EC%8A%A4%ED%8E%98%EC%9D%B4%ED%81%AC.PNG?raw=true",
          "foodname": "뉴욕스트립스테이크",
          "foodprice": 35000,
          "foodamount": 1
        },
        {
          "id": 3,
          "img":
            "https://github.com/ruddls00114/images/blob/master/img/salad/%EC%83%81%ED%95%98%EC%9D%B4%EC%B9%98%ED%82%A8%EC%83%90%EB%9F%AC%EB%93%9C.PNG?raw=true",
          "foodname": "상하이치킨샐러드",
          "foodprice": 18500,
          "foodamount": 1
        },
        {
          "id": 4,
          "img":
            "https://github.com/ruddls00114/images/blob/master/img/dessert/%EC%95%84%EC%9D%B4%EC%8A%A4%ED%81%AC%EB%A6%BC%EB%98%90%EB%8A%94%EC%85%94%EB%B2%97.PNG?raw=true",
          "foodname": "아이스크림 또는 셔벗",
          "foodprice": 6300,
          "foodamount": 1
        }
      ],
      snackbar: false,
      text: '주문완료!',
      vertical: true,
    };
  },
  methods: {

    removeFood(id) {
      //   console.log(food)
      // this.listData = this.listData.filter(item=>{item.food !==food ; console.log(item.food)})
      this.listData = this.listData.filter(item => item.id !== id);
    },
      nfcpay: function() {
        // //todo
        // // post to backend server "nfc"
          this.$http.post("/api/payment/complete",
              {listData : this.listData}
              )
         .then(res => {
             console.log(res)
             this.flag = 1;
             this.customername = res.data.customername;
             this.totalprice = res.data.totalprice;
           // }
         })
         .catch(e => { // 500 error  
         console.log(this.listData)
           console.log(e)
           // resolve(false)
         })
        // this.flag=1;
        // this.$router.push("/");
      // alert("이아연 님 결제가 완료되었습니다.")

    // })
        // this.$router.push("/about");
      },
      localpay: function() {
        //todo
        // post to backend server "nfc"
        // alert("주문 완료! ");
        this.$router.push("/");

      }
  }
};
</script>

<style lang="scss">
.pb{

  color: #FFEBEE !important;
  background: #F4511E !important;

}
.pay-bnt {
    padding: 15px;
    margin: 32vw;
    margin-top: auto;
}
img {
  width: 8vw;
}
.tb-btn {
  color: #FFEBEE !important;
  background: #F4511E !important;
  width: 8vw;
}
.btn {
  color: black !important;
  // background :cornsilk !important;
  // flat;
  width: 10vw;
}
.cart {
  table {
    border-top: 10px solid #E53935;
    margin: 0 auto;
    width: 80vw;
    border-collapse: collapse;
    .tr-name {
      background: #FFCDD2;
    }
  }
  td {
    // border-bottom: 1px solid #efb1b1;
    text-align : center;
    border: 1px solid #E53935;
    padding: 15px;
    // width:%;

  }
  tr {
    min-height: 17vh;
  }
}
</style>
