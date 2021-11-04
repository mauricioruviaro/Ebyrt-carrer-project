const taskService = require('../services/taskService');
const {
  addTask,
} = require('../models/TaskModel');

const somethingIsWrong = 'Something is wrong'
const taskInserted = 'Task inserted';
const invalidValues = 'Invalid values';

const addTaskController = async (req, res) => {
  try {
    const { task, status } = req.body;
    const verifyTasks = taskService.verifyTask(task, status);

    if (!verifyTasks) return res.status(401).json({ message: invalidValues });

    await addTask(task, status);
    res.status(201).json({ message: taskInserted });
  } catch (error) {
    res.status(500).json({ message: somethingIsWrong });
  }
};

module.exports = {
  addTaskController,
};
