const router = require('express').Router();
const taskController = require('../controller/taskController');

router.use("/all", taskController.task_get);
router.use("/tasks", taskController.task_post);

module.exports = router;