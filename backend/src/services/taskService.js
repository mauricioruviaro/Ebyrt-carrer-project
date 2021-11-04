const Joi = require('joi');

const verifyTask = (task, status) => {
  const schema = Joi.object({
    task: Joi.string().required(),
    status: Joi.string().required(),
  });

  const validate = schema.validate({ task, status });
  return validate;
};

module.exports = {
  verifyTask,
};
