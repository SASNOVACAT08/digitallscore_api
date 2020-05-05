// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async (context) => {
    const sequelize = context.app.get("sequelizeClient");
    const { users, objectives } = sequelize.models;
    context.params.sequelize = {
      where: { userId: context.params.user.id },
      include: [
        { model: users, attributes: ["name", "firstname", "email"] },
        { model: objectives },
      ],
      raw: false,
    };
    return context;
  };
};
