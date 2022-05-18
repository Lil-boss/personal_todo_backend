const router = require('express').Router();
const taskController = require('../controller/taskController');

router.get("/all", taskController.task_get);
router.post("/tasks", taskController.task_post);
router.put("/tasks/:id", taskController.task_put);
router.delete("/tasks/:id", taskController.task_delete);

module.exports = router;