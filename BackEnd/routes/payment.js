var express = require('express');
var router = express.Router();
var Payment = require('../models/payment');

const Nfc = require('../NFC_serial')
router.use(function (req, res, next) {
    next();
});


router.get('/paymentOk',(req,res,next)=>{
    //
    var nfcData = Nfc;
    console.log("!@#$%^&*(IO)",nfcData);
    

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
        customer :
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
   
    //NFC 결제 동작 시작
    const SerialPort = require('serialport')
    const Readline = SerialPort.parsers.Readline
    const port = new SerialPort("COM3", {
        baudRate:9600
    
    }, false);
    const parser = new Readline()
    port.pipe(parser)
    parser.on('data', console.log)


    console.log('SYSTEM: 결제완료')
    const size = req.body.totalfood.length;
    const customer = parser //카드결제고객 이름
    var totalprice = 0
    var totalfoodArr = new Array();

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
              customer,
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
  
    Payment.find()
        .then(create)
        .then(respond)
        .catch(onError)
  });
  
  module.exports = router;