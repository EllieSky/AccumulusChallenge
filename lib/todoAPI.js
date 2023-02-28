const axios = require('axios');

class TodoAPI {
    constructor(options) {
        axios.defaults.validateStatus = (status) => {
            return status < 503;
        };
        axios.defaults.baseURL = 'https://63fd7c2cc639f856314179e4.mockapi.io/todos'
        this.inst = axios.create(options);
    }

    async getAllTodos(params={}) {
        return await this.inst({
            method: 'GET',
            url: "/",
            params
        });
    }

    async getTodo(id) {
        return await this.inst({
            method: 'GET',
            url: `/${id}`
        });
    }

    async deleteTodo(id) {
        return await this.inst({
            method: 'DELETE',
            url: `/${id}`
        });
    }

    async addTodo(options) {
        return await this.inst({
            method: 'POST',
            url: `/`,
            data: options
        });
    }

    async updateTodo(id, options) {
        return await this.inst({
            method: 'PUT',
            url: `/${id}`,
            data: options
        });
    }
}

module.exports = new TodoAPI();
