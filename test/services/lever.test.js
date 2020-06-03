const assert = require('assert');
const app = require('../../src/app');

describe('\'lever\' service', () => {
  it('registered the service', () => {
    const service = app.service('lever');

    assert.ok(service, 'Registered the service');
  });
});
