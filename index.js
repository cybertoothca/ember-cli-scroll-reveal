/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-cli-scroll-reveal',
  included(app) {
    this._super.included(...arguments);
    app.import(app.bowerDirectory + '/scrollreveal/dist/scrollreveal.js');
  }
};
