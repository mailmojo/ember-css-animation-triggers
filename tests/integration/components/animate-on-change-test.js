import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('animate-on-change', 'Integration | Component | animate on property change', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{animate-on-change}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#animate-on-change}}
      template block text
    {{/animate-on-change}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
