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
      <br><br>
      <v-alert type="success" v-if="this.flag==1">
      이아연님 !
       결제가 완료되었어요!
    </v-alert>
    <v-alert type="error" v-else-if="this.flag==2">
      이아연님 !
       결제가 실패하였어요.....
    </v-alert>
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
      listData: [
        {
          "id": 1,
          "img":
            "https://postfiles.pstatic.net/MjAxOTA4MDFfMTIy/MDAxNTY0NjM0Njk3MzE3.bMeLlLCu2xU7WD34Z35mmfZ8FeT1IJSkSdQFa3YQUcog.oyr20X8mWQw1Kg9aoNtbL7Kt2_tWoEEgu9JjBeLAO0Ag.PNG.momoqqq311/케이준쉬림프치킨파스타.PNG?type=w773",
          "foodname": "케이준쉬림프치킨파스타",
          "foodprice": 39000,
          "foodamount": 2
        },
        {
          "id": 2,
          "img":
            "https://mblogthumb-phinf.pstatic.net/MjAxOTA4MDFfMTk2/MDAxNTY0NjM0MDg5MTQ2.ZvEJVkhsOG1L8q3pvNeg8R0aSVy40sVS2kuYwzaUYyYg.YoElor7Imrh3x8kqsje709imIqqH_Oe0zskyn41wNbEg.PNG.momoqqq311/뉴욕스트립스페이크.PNG?type=w800",
          "foodname": "뉴욕스트립스테이크",
          "foodprice": 35000,
          "foodamount": 1
        },
        {
          "id": 3,
          "img":
            "https://postfiles.pstatic.net/MjAxOTA4MDFfNDAg/MDAxNTY0NjM1MTQ0ODg1._-FjR0HKKS4dFCQ-Ka8nkzg-J5EkAc24cN0h8HxfSNEg.LcKTLy5MU1ofm8H4oP2hL8blMdgqqf8RceZq60xKin0g.PNG.momoqqq311/상하이치킨샐러드.PNG?type=w773",
          "foodname": "상하이치킨샐러드",
          "foodprice": 18500,
          "foodamount": 1
        },
        {
          "id": 4,
          "img":
            "https://postfiles.pstatic.net/MjAxOTA4MDFfMTMz/MDAxNTY0NjM1Mjk1NzU0.eLozryTy82UG3-j9PzwB1fXjXHFqzE_Es5WIIE8OSc4g.c3DlpAKSHIiYLU5TOQvSzBuUa9fuQe1AafR8GTDlOD0g.PNG.momoqqq311/아이스크림또는셔벗.PNG?type=w773",
          "foodname": "아이스크림 또는 셔벗",
          "foodprice": 6300,
          "foodamount": 1
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
        // //todo
        // // post to backend server "nfc"
        //  axios.post("http://52.79.233.248:3000/api/payment/complete",this.listData)
        // .then(res => {
        //     // if (res.data.status) 
        //     console.log(res)
        //     // resolve(true)
        //   // }
        // })
        // .catch(e => { // 500 error  
        // console.log(this.ListData)
        //   console.log(e)
        //   // resolve(false)
        // })
        this.flag=1;
      // alert("이아연 님 결제가 완료되었습니다.")

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
