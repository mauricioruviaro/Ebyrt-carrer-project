const connection = require('./connection');

const addTask = async (task, status) => {
  const db = await connection();
  const task = await db.collection('task').insertOne({ task, status });
  return true;
};

module.exports = {
  addTask,
};
