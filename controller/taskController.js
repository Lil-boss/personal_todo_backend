const taskModel = require('../models/taskModel');

const task_get = async (req, res) => {
    try {
        const taskData = await taskModel.find();
        res.status(200).json(taskData);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
const task_post = async (req, res) => {
    try {
        let taskData = new taskModel({
            taskName: req.body.taskName,
            description: req.body.description,
            taskDate: req.body.taskDate
        });
        taskData = await taskData.save();
        res.status(201).json(taskData);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const task_put = async (req, res) => {
    try {
        const taskData = await taskModel.findByIdAndUpdate(req.params.id,
            { $set: req.body }, { new: true }
        );
        res.status(200).json(taskData);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const task_delete = async (req, res) => {
    try {
        const taskData = await taskModel.findByIdAndDelete(req.params.id);
        res.status(200).json(taskData);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    task_get,
    task_post,
    task_put,
    task_delete
}