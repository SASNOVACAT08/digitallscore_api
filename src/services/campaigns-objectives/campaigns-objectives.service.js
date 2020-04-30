// Initializes the `campaignsObjectives` service on path `/campaigns-objectives`
const { CampaignsObjectives } = require("./campaigns-objectives.class");
const createModel = require("../../models/campaigns-objectives.model");
const hooks = require("./campaigns-objectives.hooks");

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get("paginate"),
  };

  // Initialize our service with any options it requires
  app.use("/campaigns-objectives", new CampaignsObjectives(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service("campaigns-objectives");

  service.hooks(hooks);
};
