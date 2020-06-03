// Initializes the `discipline` service on path `/discipline`
const { Discipline } = require('./discipline.class');
const createModel = require('../../models/discipline.model');
const hooks = require('./discipline.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/discipline', new Discipline(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('discipline');

  service.hooks(hooks);
};
