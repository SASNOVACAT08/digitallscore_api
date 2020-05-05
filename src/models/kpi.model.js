// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require("sequelize");
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get("sequelizeClient");
  const kpi = sequelizeClient.define(
    "kpi",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      custom: {
        type: DataTypes.BOOLEAN,
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
  kpi.associate = function (models) {
    const { users } = models;
    kpi.belongsTo(users);
  };

  return kpi;
};
