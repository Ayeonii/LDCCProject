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
        <td class="table-td"></td>
      </tr>
      <tr v-for="val in listData" v-bind:key ="val.id">
        <!-- <td>{{val.id}}</td> -->
        <td>
          <img v-bind:src="val.img" />
        </td>
        <td>{{val.name}}</td>
        <td>{{val.amount}}</td>
        <td class="table-td">
          &nbsp;&nbsp;
          <v-btn class="tb-btn" @click="removeFood(val.id)">삭제</v-btn>
        </td>
        <!-- <td><a @click="removeMenu(val)">Remove</a></td>  -->
      </tr>
    </table>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <div class="pay-bnt">
      <v-btn @click="nfcpay">nfc결제</v-btn>&nbsp;&nbsp;&nbsp;&nbsp;
      <v-btn @click="localpay">현장결제</v-btn>
    </div>
  </div>
</template>

<script>
// import CartModel from "../models/CartModel.js"
export default {
  data() {
    return {
      listData: [
        {
          id: 1,
          img:
            "https://st2.depositphotos.com/5045705/11671/v/950/depositphotos_116714982-stock-illustration-little-puppy-icon.jpg",
          name: "바질 파스타",
          amount: 1
        },
        {
          id: 2,
          img:
            "https://previews.123rf.com/images/jehsomwang/jehsomwang1304/jehsomwang130400289/19191815-%EA%B0%9C-%EC%95%84%EC%9D%B4%EC%BD%98.jpg",
          name: "양갈비 스테이크",
          amount: 2
        },
        {
          id: 3,
          img:
            "https://st3.depositphotos.com/5307436/19291/v/1600/depositphotos_192916630-stock-illustration-puppy-doodle-sketch.jpg",
          name: "폭립",
          amount: 1
        },
        {
          id: 4,
          img:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7H_8r1EGr-VDMI4wsFbgfZm-AwucrqhJAHuiJsEKGxcktW1AA",
          name: "콜라",
          amount: 2
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
      // nfcpay: function() {
      //   //todo
      //   // post to backend server "nfc"
      //   //this.$router.push("/about");
      //     axios.post('/api/payment/complete', {
      //       totalfood:[
      //         {
      //           foodname: "",
      //           foodprice:"",
      //           foodamount:""
      //         }
      //       ]
      //   })
      //   .then(res => {
      //     const status = res.status
      //     if (status === 200) {
      //       this.$router.push('/about')
      //     } 
      //   })
      //   .catch(err => {
      //     console.log(err)
      //     alert(err)
      //   })
      // },
      // localpay: function() {
      //   //todo
      //   // post to backend server "nfc"
      //   alert("주문 완료! ")
      //   this.$router.push("/");

      // }
  }
};
</script>

<style lang="scss">

.pay-bnt {
    padding: 15px;
    margin: 32vw;
    margin-top: auto;
}
img {
  width: 8vw;
}
.tb-btn {
  color: #F44336 !important;
  background: #ffe0b2 !important;
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
      background: #fff3e0;
    }
  }
  td {
    // border-bottom: 1px solid #efb1b1;
    border: 1px solid #F44336;
    padding: 15px;
  }
  tr {
    min-height: 17vh;
  }
}
</style>
