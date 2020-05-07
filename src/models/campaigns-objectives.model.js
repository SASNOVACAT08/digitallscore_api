// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require("sequelize");
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get("sequelizeClient");
  const campaignsObjectives = sequelizeClient.define(
    "campaigns_objectives",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      weight: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      budgetPart: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
  campaignsObjectives.associate = function (models) {
    campaignsObjectives.belongsToMany(models.kpi, {
      through: { model: "kpi_campaigns_objectives", unique: false },
      foreignKey: { name: "campaignsObjectivesId", allowNull: false },
    });
    campaignsObjectives.belongsTo(models.campaigns);
    campaignsObjectives.belongsTo(models.objectives);
  };

  return campaignsObjectives;
};
