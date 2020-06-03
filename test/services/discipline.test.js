const assert = require('assert');
const app = require('../../src/app');

describe('\'discipline\' service', () => {
  it('registered the service', () => {
    const service = app.service('discipline');

    assert.ok(service, 'Registered the service');
  });
});
