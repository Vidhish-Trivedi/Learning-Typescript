import axios from "axios";

const url = "http://jsonplaceholder.typicode.com/todos/1"

// TS interface: used to define the structure of an object.
// We can choose to ignore some attributes if we wish to.
interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

// Async HTTP request, gives a promise in return.
axios.get(url).then(response => {
    // console.log(response.data);

    // const todo = response.data;
    const todo = response.data as Todo;  // TS type annotation.
    
    // TS helps us catch errors at development time. (eg: todo.id, todo.Id, todo.ID ????) using interfaces.
    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    logTodo(id, title, completed);
});

// We can add TS type annotations to function parameters as well.
const logTodo = (id: number, title: string, completed: boolean) => {
    console.log(`
    The todo with id: ${id}
    Has a title of: ${title}
    Status (finished?): ${completed}
    `);
}
