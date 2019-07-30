/*
payment Schema
*/

var mongoose = require("mongoose");
var autoIncrement = require('mongoose-auto-increment')
const Schema = mongoose.Schema;
autoIncrement.initialize(mongoose.connection)

var paymentSchema = new Schema({
    customer: {type:String},
    totalfood:  [{
        foodname: {type:String, required:true},
        foodprice: {type:Number, required:true},
        foodamount: {type:Number, required:true},
        foodtotalprice: {type:Number, required:true}
    }],
    totalprice: {type: Number, required:true}, //결제 총액
    paymentTime: { type: Date, default: Date.now }, //결제완료 시간
},{
    versionKey:false
});

// 메뉴 도큐먼트 생성
paymentSchema.statics.create = function (customer, totalfood, totalprice) {
    const payment = new this({
        customer,
        totalfood,
        totalprice
    });
    return payment.save();
};


var PaymentComplete = mongoose.model('Total', paymentSchema, 'Total');
module.exports =  PaymentComplete;