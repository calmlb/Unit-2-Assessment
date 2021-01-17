const Todos = require('../models/todos');

function index (req, res) {
    res.render('index.ejs', {todos:Todos.todos})
}

function createToDo (req, res) {
    console.log(req.body)
    Todos.createTodoModel(req.body.todo)
    res.redirect('/todos')
}
     
function newTodo (req, res) {
        res.render('index.ejs');
    }

module.exports = {
    index,
    new:newTodo,
    createToDo
}