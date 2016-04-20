import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('animate-on-change', 'Integration | Component | animate on property change', {
  integration: true
});

test('it renders', function (assert) {
  assert.expect(2);

  this.render(hbs`{{animate-on-change}}`);

  assert.equal(this.$().text().trim(), '');

  this.render(hbs`
    {{#animate-on-change}}
      template block text
    {{/animate-on-change}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

test('it adds an animation class on value change', function (assert) {
  assert.expect(2);

  this.set('val', 0);

  this.render(hbs`{{animate-on-change animationClass="foo"
                    observedValue=val}}`);

  // `val` hasn't changed yet
  assert.notOk(this.$('> span').hasClass('foo'));

  this.set('val', 1);

  // `val` has changed now; the class should've been added
  assert.ok(this.$('> span').hasClass('foo'));
});

test("it doesn't add an animation class when disabled", function (assert) {
  assert.expect(1);

  this.set('val', 0);

  this.render(hbs`{{animate-on-change animationClass="foo" enabled=false
                    observedValue=val}}`);

  this.set('val', 1);

  assert.notOk(this.$('> span').hasClass('foo'));
});
