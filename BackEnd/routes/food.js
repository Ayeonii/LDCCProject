var express = require('express');
var router = express.Router();
//var foods = require('../foodData.json');
var Menu = require('../models/menu');

router.use(function (req, res, next) {
    next();
});


/*
  GET api/foodList/getAll
*/

router.get('/getAll', function (req, res, next) {
  console.log('SYSTEM: 메뉴 가져오기')

  Menu.find({},(err, data) => {
    if (err) res.status(500).send({
        error: 'database failure'
    });
    console.log('Menu' + data);
    res.json(data);
  })
});


/*
  POST api/foodList/addMenu

  JSON
  {
    name : 
    price : 
  }
*/

router.post('/addMenu', function (req, res, next) {
  console.log('SYSTEM: 메뉴 추가')
 
  const name = req.body.name
  const price = req.body.price

  console.log("name: "+name)
  console.log("price:"+price)


  // 메뉴가 없으면 추가함
  const create = (menulist) => {
      if (menulist) {
          throw new Error('menu exists')
      } else {
          return Menu.create(
            name,
            price
          )
      }
  }

  const respond = () => {
      console.log('SYSTEM: 메뉴 추가 완료')
      res.json({
          message: 'add menu successfully',
      })
  }

  const onError = (error) => {
      console.log('SYSTEM: ' + error)
      res.status(203).json({ 
          message: error.message
      })
  }

  // 메뉴 중복검사 후 추가 로직
  Menu.findDuplicate(name,price)
      .then(create)
      .then(respond)
      .catch(onError)
});

module.exports = router;