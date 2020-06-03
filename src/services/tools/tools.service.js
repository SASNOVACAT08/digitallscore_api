// Initializes the `tools` service on path `/tools`
const { Tools } = require('./tools.class');
const createModel = require('../../models/tools.model');
const hooks = require('./tools.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/tools', new Tools(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('tools');

  service.hooks(hooks);
};
