import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('scroll-reveal/div', 'Integration | Component | scroll reveal/div', {
  integration: true
});

test('it renders', function (assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{scroll-reveal/div}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#scroll-reveal/div}}
      template block text
    {{/scroll-reveal/div}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
