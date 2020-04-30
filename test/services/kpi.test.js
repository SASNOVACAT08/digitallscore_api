const assert = require('assert');
const app = require('../../src/app');

describe('\'kpi\' service', () => {
  it('registered the service', () => {
    const service = app.service('kpi');

    assert.ok(service, 'Registered the service');
  });
});
