const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    taskName: { required: true, type: String },
    description: { required: true, type: String },
    taskDate: { required: true, type: String },
    isCompleted: { required: true, type: Boolean }
});

module.exports = mongoose.model('task', taskSchema);