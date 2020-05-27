import axios from 'axios';

const TODO_API_BASE_URL = 'http://localhost:8080/todo';

class TodoService {

    fetchTodos() {
        return axios.get(TODO_API_BASE_URL);
    }

    fetchTodoById(todoId) {
        return axios.get(TODO_API_BASE_URL + '/' + todoId);
    }

    deleteTodo(todoId) {
        return axios.delete(TODO_API_BASE_URL + '/' + todoId);
    }

    addTodo(todo) {
        return axios.post(TODO_API_BASE_URL, todo);
    }

    editTodo(todo) {
        return axios.put(TODO_API_BASE_URL + '/' + todo.id, todo);
    }

}

export default new TodoService();
