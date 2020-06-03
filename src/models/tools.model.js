// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require("sequelize");
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get("sequelizeClient");
  const tools = sequelizeClient.define(
    "tools",
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
  tools.associate = function (models) {
    tools.hasMany(models.kpi_campaigns_objectives, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return tools;
};
