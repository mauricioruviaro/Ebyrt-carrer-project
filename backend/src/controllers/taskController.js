const {
  addTask,
} = require('../models/TaskModel');

const somethingIsWrong = 'Something is wrong'
const taskInserted = 'Task inserted';

const addTaskController = async (req, res) => {
  try {
    const { task, status } = req.body;

    await addTask(task, status);
    res.status(201).json({ message: taskInserted });
  } catch (error) {
    res.status(500).json({ message: somethingIsWrong });
  }
};

module.exports = {
  addTaskController,
};
