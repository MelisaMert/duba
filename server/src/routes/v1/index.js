/**  Routes */
const todosRouter =  require('./todosRoutes');

module.exports = function (fastify, opts, done) {
    fastify.register(todosRouter, {prefix: '/todos'});
    done();
}
