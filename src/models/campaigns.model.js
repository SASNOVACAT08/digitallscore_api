// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require("sequelize");
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get("sequelizeClient");
  const campaigns = sequelizeClient.define(
    "campaigns",
    {
      advertiser: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      provider: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      product: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      budget: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      ended: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      startedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      endedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      score: {
        type: DataTypes.INTEGER,
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
    const { users, campaigns_objectives, discipline, lever } = models;
    campaigns.belongsTo(users);
    campaigns.hasMany(campaigns_objectives, {
      foreignKey: {
        allowNull: false,
      },
    });
    campaigns.belongsTo(discipline);
  };

  return campaigns;
};
