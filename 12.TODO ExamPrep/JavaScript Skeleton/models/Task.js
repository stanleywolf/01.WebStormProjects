const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({

    title:{type: String, required: true},
    comments:{type:String, required:true}
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;