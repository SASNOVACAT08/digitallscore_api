const users = require("./users/users.service.js");
const campaigns = require("./campaigns/campaigns.service.js");
const kpi = require("./kpi/kpi.service.js");
const objectives = require("./objectives/objectives.service.js");
const campaignsObjectives = require("./campaigns-objectives/campaigns-objectives.service.js");
const kpiCampaignsObjectives = require("./kpi-campaigns-objectives/kpi-campaigns-objectives.service.js");
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(campaigns);
  app.configure(kpi);
  app.configure(objectives);
  app.configure(campaignsObjectives);
  app.configure(kpiCampaignsObjectives);
};
