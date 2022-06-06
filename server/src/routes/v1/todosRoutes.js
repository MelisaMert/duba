/** Controllers */
const TodosController = require('../../controllers/v1/TodosController')

module.exports = function (fastify, opts, done) {
    fastify.get('/', (...parameters) => TodosController.GetTodos(fastify.repositories, ...parameters));
    done();
}
