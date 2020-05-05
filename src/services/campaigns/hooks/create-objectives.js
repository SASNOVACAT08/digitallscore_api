// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async (context) => {
    const sequelize = context.app.get("sequelizeClient");
    const { objectives, campaigns_objectives } = sequelize.models;
    let obj = await objectives.findAll();
    obj.map((ele) => {
      campaigns_objectives.create({
        weight: 0,
        budgetPart: 0,
        campaignsId: context.result.dataValues.id,
        objectivesId: ele.dataValues.id,
      });
    });
    return context;
  };
};
