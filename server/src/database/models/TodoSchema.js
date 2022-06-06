/** Dependencies */
const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    Name: {
        type: String,
    },
    Status: {
        type: String,
        default: 'NotCompleted'
    },
    CreatedDateTime:{
        type: Date,
        default: new Date()
    }
});

const TodoSchemaModel = mongoose.model('Todos', TodoSchema);
module.exports = TodoSchemaModel;
