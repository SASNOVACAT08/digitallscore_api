// Initializes the `objectives` service on path `/objectives`
const { Objectives } = require('./objectives.class');
const createModel = require('../../models/objectives.model');
const hooks = require('./objectives.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/objectives', new Objectives(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('objectives');

  service.hooks(hooks);
};
