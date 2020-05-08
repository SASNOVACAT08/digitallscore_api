// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async (context) => {
    const sequelize = context.app.get("sequelizeClient");
    const {
      users,
      campaigns_objectives,
      objectives,
      kpi,
      kpi_campaigns_objectives,
    } = sequelize.models;
    context.params.sequelize = {
      include: [
        { model: users, attributes: ["name", "firstname", "email"] },
        {
          model: campaigns_objectives,
          include: [
            { model: objectives },
            {
              model: kpi_campaigns_objectives,
              include: [{ model: kpi, attributes: ["name"] }],
            },
          ],
        },
      ],
      raw: false,
    };
    if (context.data.kpi) {
      const { kpi } = context.data;
      kpi_campaigns_objectives.create({
        weight: kpi.weight,
        objectivesValue: kpi.objectivesValue,
        campaignsObjectiveId: kpi.campaignsObjectiveId,
        kpiId: kpi.kpiId,
      });
    }
    return context;
  };
};
