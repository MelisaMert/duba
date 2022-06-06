const {attributes} = require("structure");

const TodoDTO = attributes({
    Id: {
        type: String,
        required: true,
        default: ''
    },
    Name: {
        type:String,
        required: true,
        default: ''
    },
    Status: {
        type: String,
        required: true,
        default: 'NotCompleted'
    },
    CreatedDateTime: {
        type: String,
        required: true,
        default: ''
    },
})(
    class TodoDTO {
        /** **/
    }
);

module.exports = TodoDTO;

