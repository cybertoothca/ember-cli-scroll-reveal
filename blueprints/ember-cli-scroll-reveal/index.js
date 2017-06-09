/* eslint-env node */
module.exports = {
  afterInstall: function (/*options*/) {
    this.addBowerPackagesToProject([
      {name: 'scrollreveal'}
    ]);
  },
  description: 'Ember-ized scroll animations for web and mobile browsers.',
  name: 'ember-cli-scroll-reveal',
  normalizeEntityName: function (entityName) {
    // Normalize and validate entity name here.
    return entityName;
  }
};
