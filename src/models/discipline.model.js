// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require("sequelize");
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get("sequelizeClient");
  const discipline = sequelizeClient.define(
    "discipline",
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
  discipline.associate = function (models) {
    discipline.hasMany(models.campaigns, {
      foreignKey: {
        allowNull: false,
      },
    });
    discipline.hasMany(models.lever, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return discipline;
};
