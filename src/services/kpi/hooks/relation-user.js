// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async (context) => {
    const sequelize = context.app.get("sequelizeClient");
    const { Op } = require("sequelize");
    const { users } = sequelize.models;
    context.params.sequelize = {
      where: { userId: { [Op.or]: [context.params.user.id, null] } },
      include: [{ model: users, attributes: ["name", "firstname", "email"] }],
      raw: false,
    };
    return context;
  };
};
