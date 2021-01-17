var express = require('express');
var router = express.Router();
var TodosCtrl = require('../controllers/todo.js');
const todos = require('../models/todos');

/* GET users listing. */
router.get('/', TodosCtrl.index);
router.post("/", TodosCtrl.createToDo);

module.exports = router;
