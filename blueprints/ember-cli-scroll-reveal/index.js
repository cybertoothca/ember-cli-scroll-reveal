/* eslint-env node */
module.exports = {
  afterInstall: function (/*options*/) {
    return this.addBowerPackageToProject('scrollreveal');
  },
  description: 'Ember-ized scroll animations for web and mobile browsers.',
  name: 'ember-cli-scroll-reveal',
  normalizeEntityName: function () {
  }
};
