/** Routes */
const v1 = require("./v1");

module.exports = function (fastify, opts, done) {
    fastify.get(
        "/healthcheck",
        {
            schema: {
                description: "Api uptime check",
                tags: ["Healthcheck",],
                summary: "Healthcheck",
                response: {
                    200: {
                        description: "response and schema description",
                        type: "string",
                    },
                },
            },
        },
        (_, reply) => {
            reply.code(200).send("Api is up and running");
        }
    );
    fastify.register(v1, {prefix: "/v1" });
    done();
};
