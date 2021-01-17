var express = require('express');
var router = express.Router();
const todos = require('../controllers/todo')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;
