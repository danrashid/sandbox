var ScrollableCollection = Backbone.Collection.extend({
  initialize: function (models, options) {
    this.path = options.path;
  },

  url: function () {
    return 'fixtures/' + this.path + '.json';
  }
});
