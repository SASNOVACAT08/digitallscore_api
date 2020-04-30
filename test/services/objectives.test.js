const assert = require('assert');
const app = require('../../src/app');

describe('\'objectives\' service', () => {
  it('registered the service', () => {
    const service = app.service('objectives');

    assert.ok(service, 'Registered the service');
  });
});
