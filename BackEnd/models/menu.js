/*
menu Schema
*/

var mongoose = require("mongoose");
var autoIncrement = require('mongoose-auto-increment')
const Schema = mongoose.Schema;
autoIncrement.initialize(mongoose.connection)

var menuSchema = new Schema({
    name: {type: String, required:true},
    price: {type: Number}
},{
    versionKey:false
});


//메뉴 중복검사
menuSchema.statics.findDuplicate = function(name, price) {
    console.log("SYSTEM: 메뉴 중복검사")
    return this.findOne({
        name: name, 
        price: price
    }).exec();
};

// 메뉴 도큐먼트 생성
menuSchema.statics.create = function (name, price) {
    const menu = new this({
        name,
        price
    });
    return menu.save();
};


var Menu = mongoose.model('Menu', menuSchema, 'Menu');
module.exports =  Menu;