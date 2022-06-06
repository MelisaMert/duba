/** Models */
const TodoSchemaModel = require('./models/TodoSchema');

class TodoRepository {
    constructor() {
        this.model = TodoSchemaModel;
    }

    getTodos() {
        return new Promise(async(resolve, reject) => {
            try {
                const output = await this.model.find();
                resolve(output);
            } catch (error) {
                reject(error);
            }
        })}
}

module.exports = TodoRepository;

