/** Dependencies */
const crypto = require("crypto");

/** DTOs */
const TodoDTO = require("../DTOs/TodoDTO");

/** GetTodoById, CreateTodo */

class TodoDomainService {
    static async GetTodos (repositories) {
        const { todoRepository } = repositories;

        const todosRepositoryResponse = await todoRepository.getTodos();

        const todos = todosRepositoryResponse.map((todo) => {
            const todoDto = new TodoDto({
                Id: todo._id,
                Name: todo.Name,
                Status: todo.Status,
                CreatedDateTime: new Date(todo.CreatedDateTime).toISOString()
            });

            return todoDto.toJSON();
        });

        return todos;
    }
}

module.exports = TodoDomainService
