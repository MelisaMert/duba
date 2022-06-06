/** Dependencies */
const mongoose = require('mongoose');

async function mongoClient(mediator) {
    try {
        const mongoDb = await mongoose.connect(process.env.MONGODB_DATABASE_URI,{
            autoCreate: true
        });

        console.log('DB connected')
        mediator.emit('db:ready', mongoDb);

    } catch(error) {
        console.log(error)
        mediator.emit('db:failed');
    }
}

module.exports = mongoClient;
