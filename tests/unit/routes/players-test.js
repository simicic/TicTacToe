import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | players', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:players');
    assert.ok(route);
  });
});
