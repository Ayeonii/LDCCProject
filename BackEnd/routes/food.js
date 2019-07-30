var express = require('express');
var router = express.Router();
var foods = require('../foodData.json');

router.get('/', function (req, res, next) {
  res.send(foods)
});

router.get('/:id', function (req, res, next) {
  var id = parseInt(req.params.id, 10)
  var food = foods.filter(function (food) {
    return food.id === id
  });
  res.send(food)
});

module.exports = router;