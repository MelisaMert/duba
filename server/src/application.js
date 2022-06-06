/** Dependencies */
const EventEmitter = require('events');

const fastify = require('fastify')({logger: true});

const fastifySwagger = require('fastify-swagger');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

/** Routes */
const routes = require('./routes');

/** Databese */
const mongoClient = require('./database/mongoClient');
const TodoRepository = require('./database/TodoRepository');

const mediator = new EventEmitter();

fastify.register(routes, {prefix: '/api'});

async function bootstrap() {
    mediator.on('db:ready', async() => {
        try {
            const todoRepository = new TodoRepository();

            fastify.decorate('repositories', {todoRepository});
            await fastify.listen(3000);

        } catch(err){
            fastify.log.error(err);
            process.exit(1);
        }
    })
}

mediator.on('db:failed', () => {
    process.exit(1);
})

// fastify.get('/', async(request, reply) => {
//     return {hello: 'world'}
// })

bootstrap();
mongoClient(mediator);
