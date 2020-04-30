// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require("sequelize");
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get("sequelizeClient");
  const objectives = sequelizeClient.define(
    "objectives",
    {
      name: {
        type: DataTypes.STRING,
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
  objectives.associate = function (models) {
    objectives.belongsToMany(models.campaigns, {
      through: "campaigns_objectives",
      foreignKey: "campaignsId",
    });
  };

  return objectives;
};
