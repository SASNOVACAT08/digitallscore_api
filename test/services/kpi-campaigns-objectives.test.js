const assert = require('assert');
const app = require('../../src/app');

describe('\'kpiCampaignsObjectives\' service', () => {
  it('registered the service', () => {
    const service = app.service('kpi-campaigns-objectives');

    assert.ok(service, 'Registered the service');
  });
});
