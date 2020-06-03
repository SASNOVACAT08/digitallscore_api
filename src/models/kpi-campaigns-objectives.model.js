// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require("sequelize");
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get("sequelizeClient");
  const kpiCampaignsObjectives = sequelizeClient.define(
    "kpi_campaigns_objectives",
    {
      id: {
        type: DataTypes.INTEGER,
        allownull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      weight: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      objectivesValue: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      hooks: {
        beforeCount(options) {
          options.raw = true;
        },
      },
    }
  );

  // eslint-disable-next-line no-unused-vars
  kpiCampaignsObjectives.associate = function (models) {
    kpiCampaignsObjectives.belongsTo(models.kpi);
    kpiCampaignsObjectives.belongsTo(models.campaigns_objectives);
    kpiCampaignsObjectives.belongsTo(models.tools);
  };

  return kpiCampaignsObjectives;
};
