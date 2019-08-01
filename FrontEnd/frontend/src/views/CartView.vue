<template>
  <div class="cart">
    <span>
      <v-btn text><a href= "/" >뒤로가기</a> </v-btn>
    </span>
    <br />
    <br />
    <h2>&nbsp;&nbsp;&nbsp;&nbsp; 장바구니</h2>
    <br />    <br />    <br />   <br /> <br />
    <table class="cart-table">
      <tr class="tr-name">
        <!-- <td class="table-td">No.</td> -->  
        <td class="table-td">사진</td>
        <td class="table-td">이름</td>
        <td class="table-td">수량</td>
        <td class="table-td">가격</td>
        <td class="table-td"></td>
      </tr>
      <tr v-for="val in listData">
        <!-- <td>{{val.id}}</td> -->
        <td>
          <img v-bind:src="val.img" />
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
      <v-btn class="pb" @click="localpay">현장결제</v-btn>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
// import CartModel from "../models/CartModel.js"
export default {
  data() {
    return {
      listData: [
        {
          "id": 1,
          "img":
            "https://st2.depositphotos.com/5045705/11671/v/950/depositphotos_116714982-stock-illustration-little-puppy-icon.jpg",
          "foodname": "바질 파스타",
          "foodprice": 21000,
          "foodamount": 1
        },
        {
          "id": 2,
          "img":
            "https://previews.123rf.com/images/jehsomwang/jehsomwang1304/jehsomwang130400289/19191815-%EA%B0%9C-%EC%95%84%EC%9D%B4%EC%BD%98.jpg",
          "foodname": "양갈비 스테이크",
          "foodprice": 42000,
          "foodamount": 2
        },
        {
          "id": 3,
          "img":
            "https://st3.depositphotos.com/5307436/19291/v/1600/depositphotos_192916630-stock-illustration-puppy-doodle-sketch.jpg",
          "foodname": "폭립",
          "foodprice": 35000,
          "foodamount": 1
        },
        {
          "id": 4,
          "img":
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7H_8r1EGr-VDMI4wsFbgfZm-AwucrqhJAHuiJsEKGxcktW1AA",
          "foodname": "콜라",
          "foodprice": 6000,
          "foodamount": 2
        }
      ]
    };
  },
  methods: {
    removeFood(id) {
      //   console.log(food)
      // this.listData = this.listData.filter(item=>{item.food !==food ; console.log(item.food)})
      this.listData = this.listData.filter(item => item.id !== id);
    },
      nfcpay: function() {
        //todo
        // post to backend server "nfc"
         axios.post("http://52.79.233.248:3000/api/payment/complete",this.listData)
        .then(res => {
            // if (res.data.status) 
            console.log(res)
            // resolve(true)
          // }
        })
        .catch(e => { // 500 error  
        console.log(this.ListData)
          console.log(e)
          // resolve(false)
        })
    // })
        // this.$router.push("/about");
      },
      localpay: function() {
        //todo
        // post to backend server "nfc"
        alert("주문 완료! ")
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
    border: 1px solid #E53935;
    padding: 15px;
  }
  tr {
    min-height: 17vh;
  }
}
</style>
