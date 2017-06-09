import Ember from 'ember';
import layout from '../../templates/components/scroll-reveal/div';
import ScrollRevealMixin from '../../mixins/scroll-reveal';

export default Ember.Component.extend(ScrollRevealMixin, {
  classNames: ['scroll-reveal-div'],
  layout,
  tagName: 'div',
  _initializeReveal: Ember.on('didInsertElement', function () {
    this.get('scrollReveal').reveal(this.$(), this.get('options'));
  })
});
