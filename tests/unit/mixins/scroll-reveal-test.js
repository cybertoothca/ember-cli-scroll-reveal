import Ember from 'ember';
import ScrollRevealMixin from 'ember-cli-scroll-reveal/mixins/scroll-reveal';
import { module, test } from 'qunit';

module('Unit | Mixin | scroll reveal');

// Replace this with your real tests.
test('it works', function (assert) {
  let ScrollRevealObject = Ember.Object.extend(ScrollRevealMixin);
  let subject = ScrollRevealObject.create();
  assert.ok(subject);
});
