// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require("sequelize");
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get("sequelizeClient");
  const campaigns = sequelizeClient.define(
    "campaigns",
    {
      product: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      budget: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      endedAt: {
        type: DataTypes.DATE,
        allowNull: true,
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
  campaigns.associate = function (models) {
    const { users } = models;
    campaigns.belongsTo(users);
  };

  return campaigns;
};
