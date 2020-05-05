// Initializes the `kpiCampaignsObjectives` service on path `/kpi-campaigns-objectives`
const { KpiCampaignsObjectives } = require('./kpi-campaigns-objectives.class');
const createModel = require('../../models/kpi-campaigns-objectives.model');
const hooks = require('./kpi-campaigns-objectives.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/kpi-campaigns-objectives', new KpiCampaignsObjectives(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('kpi-campaigns-objectives');

  service.hooks(hooks);
};
