// Initializes the `lever` service on path `/lever`
const { Lever } = require('./lever.class');
const createModel = require('../../models/lever.model');
const hooks = require('./lever.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/lever', new Lever(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('lever');

  service.hooks(hooks);
};
