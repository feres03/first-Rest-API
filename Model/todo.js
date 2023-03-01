const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const todoSchema = new Schema({
    Name: {
        type: String,
        required: [true, 'Name is required']
    },
    description: {
        type: String,
        required: [true, 'Description is required']
    }
})
const toDo = mongoose.model('todo', todoSchema);
module.exports = toDo;