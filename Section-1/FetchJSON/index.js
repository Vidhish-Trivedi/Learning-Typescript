"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = "http://jsonplaceholder.typicode.com/todos/1";
// Async HTTP request, gives a promise in return.
axios_1["default"].get(url).then(function (response) {
    // console.log(response.data);
    // const todo = response.data;
    var todo = response.data; // TS type annotation.
    // TS helps us catch errors at development time. (eg: todo.id, todo.Id, todo.ID ????) using interfaces.
    var id = todo.id;
    var title = todo.title;
    var completed = todo.completed;
    logTodo(id, title, completed);
});
// We can add TS type annotations to function parameters as well.
var logTodo = function (id, title, completed) {
    console.log("\n    The todo with id: ".concat(id, "\n    Has a title of: ").concat(title, "\n    Status (finished?): ").concat(completed, "\n    "));
};
