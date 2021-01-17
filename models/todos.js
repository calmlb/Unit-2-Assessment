const todos = [
    {id: 2345, todo: 'feed dogs', done: false},
    {id: 3466, todo: 'eat crayons', done: false},
    {id: 4567, todo: 'wash private jet', done: false}
];

function createTodoModel(incoming_todo) {
    let obj = {};
    obj.todo = incoming_todo
    obj.done = false;
    todos.push(obj);
  }
  
  function getAll() {
    return todos;
  }

module.exports = {
    getAll,
    createTodoModel,
    todos
}