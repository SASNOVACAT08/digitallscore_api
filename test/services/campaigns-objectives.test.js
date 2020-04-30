const assert = require('assert');
const app = require('../../src/app');

describe('\'campaignsObjectives\' service', () => {
  it('registered the service', () => {
    const service = app.service('campaigns-objectives');

    assert.ok(service, 'Registered the service');
  });
});
