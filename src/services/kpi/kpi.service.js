// Initializes the `kpi` service on path `/kpi`
const { Kpi } = require('./kpi.class');
const createModel = require('../../models/kpi.model');
const hooks = require('./kpi.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/kpi', new Kpi(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('kpi');

  service.hooks(hooks);
};
