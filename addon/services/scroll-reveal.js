/* global ScrollReveal */
import Ember from 'ember';

export default Ember.Service.extend({
  _initializeScrollReveal: Ember.on('init', function () {
    Ember.Logger.debug('Initializing the ScrollReveal service.');
    this.set('instance', ScrollReveal());
  })
});
