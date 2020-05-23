import axios from 'axios';

const TODO_API_BASE_URL = 'http://localhost:9000/todos';

class TodoService {

    fetchUsers() {
        return axios.get(TODO_API_BASE_URL);
    }

    fetchUserById(todoId) {
        return axios.get(TODO_API_BASE_URL + '/' + todoId);
    }

    deleteUser(todoId) {
        return axios.delete(TODO_API_BASE_URL + '/' + todoId);
    }

    addUser(todo) {
        return axios.post(TODO_API_BASE_URL, todo);
    }

    editUser(todo) {
        return axios.put(TODO_API_BASE_URL + '/' + todo.id, todo);
    }

}

export default new TodoService();
