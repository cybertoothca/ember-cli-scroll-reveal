/* eslint-env node */
module.exports = {
  description: 'Ember-ized scroll animations for web and mobile browsers.',
  name: 'ember-cli-scroll-reveal',
  afterInstall: function (/*options*/) {
    this.addBowerPackagesToProject([
      {name: 'scrollreveal'}
    ]);
  }
};
