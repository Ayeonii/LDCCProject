<template>
    <div class="cart">
    <span><v-btn text>뒤로가기</v-btn></span><br><br>
        <h2> &nbsp;&nbsp;&nbsp;&nbsp; 장바구니</h2><br><br><br><br><br>
        <table class="cart-table" >
            <tr class="tr-name">
                <td class="table-td">No.</td>
                <td class="table-td">사진</td>
                <td class="table-td">이름</td>
                <td class="table-td">수량</td>
                <td class="table-td"></td>
            </tr>
            <tr v-for="val in this.listData" >
                <td>{{val.id}}</td>
                <td>{{val.img}}</td>
                <td>{{val.name}}</td>
                <td>{{val.amount}}</td>
                <td class="table-td">&nbsp;&nbsp;<v-btn class ="tb-btn" @click="clickDeleteMenu(val.id)">삭제</v-btn></td>
            </tr>
            

        </table>

   </div>
</template>

<script>
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
    methods :{
        clickDeleteMenu(value){
            var menu= value;
            console.log(value)
        }
    }
}
</script>

<style lang="scss">
    .tb-btn {
         color: #E65100 !important;
        background: #FFE0B2 !important;
        width: 8vw;
    }
    .btn {
         color: black !important;
        // background :cornsilk !important;
        // flat;
        width: 10vw;
    }
    .cart {
        table{
        border-top:10px solid #FB8C00;
        margin:0 auto; width:80vw;
        border-collapse: collapse;
        .tr-name {
            background:  #FFF3E0
        }
        }
        td{
         // border-bottom: 1px solid #efb1b1;
          border: 1px solid #FB8C00;
          padding: 15px;
        }
        tr{
        min-height: 17vh;
        }
    }
</style>
