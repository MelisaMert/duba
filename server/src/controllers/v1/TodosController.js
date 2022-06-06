/** Domain Services */
const TodoDomainService = require("../../domain/services/TodoDomainService");

/** GetTodoById, CreateTodo */

class TodosController {
    static async GetTodos(repositories, _, reply) {
        const todos = await TodoDomainService.GetTodos(repositories);
        reply.code(200).send(todos);
    }
}

module.exports = TodosController;
