
var express = require('express');
var router = express.Router();
var Payment = require('../models/payment');
var SerialPort = require('serialport')
var Readline = SerialPort.parsers.Readline
var port = new SerialPort('/dev/ttyACM2', {
    autoOpen: true,
    baudRate:9600
}, false);

port.once('open',function(){
    console.log('Open Serialport')
})


/*
  GET api/payment/getAll                 결제내역 전체 보기
*/
router.get('/getAll', function (req, res, next) {
    console.log('SYSTEM: 결제내역')
    Payment.find({},(err, data) => {
      if (err) res.status(500).send({
          error: 'database failure'
      });
      console.log('List' + data);
      res.json(data);
    })
});


/*
  POST api/payment/complete

  JSON 형식
    {
        totalfood:
        [
            {
                foodname :
                foodprice :
                foodamount :
            }
        ]
    }

*/


 router.post('/complete', function (req, res, next) {
   console.log("NFC결제 시작")

    var parser = new Readline()
    port.pipe(parser)
    parser.on('data',function(data){
    
        var tmp = data + "";
        var customerlength = tmp.length;
        var customer = tmp.substring(1,customerlength-1);
        var customerko;
        var size = req.body.totalfood.length;
        var totalprice = 0
        var totalfoodArr = new Array();
        if(customer == "KyungIn"){
            customerko = "정경인"
        }else if(customer == "MinWoong"){
            customerko = "강민웅"
        }else if(customer == "JinSik"){
            customerko = "이진식"
        }
        
         for(var i = 0; i < size; i++){
             var totalfoodObj = new Object();
             var fp =  parseInt(req.body.totalfood[i].foodprice)
             var fa =  parseInt(req.body.totalfood[i].foodamount)
             var foodttprice =  fp * fa
             totalfoodObj.foodname = req.body.totalfood[i].foodname,
             totalfoodObj.foodprice = req.body.totalfood[i].foodprice,
             totalfoodObj.foodamount =req.body.totalfood[i].foodamount,
             totalfoodObj.foodtotalprice = foodttprice
             totalfoodArr.push(totalfoodObj);
             totalprice += foodttprice
         }
         //결제내역 추가.
         const create = () => {
                 return Payment.create(
                   customerko,
                   totalfoodArr,
                   totalprice,
                 )
         }
         const respond = () => {
             console.log('SYSTEM: 메뉴 결제 완료')
             res.json({
                 message: '결제가 완료되었습니다.',
             })
         }
         const onError = (error) => {
             console.log('SYSTEM: ' + error)
             res.status(203).json({
                 message: error.message
             })
         }
         if(customer.length >1){
            Payment.find()
            .then(create)
            .then(respond)
            .catch(onError)
         }
    });


});



  module.exports = router;