var ScrollableView = Backbone.View.extend({
  template: scrollableTemplate,

  initialize: function (options) {
    this.showEditLink = options.showEditLink;

    this.listenTo(this.collection, 'update', this.render);

    setTimeout(function () {
      this.collection.fetch();
    }.bind(this), 2000);
  },

  render: function () {
    this.$el
      .html(this.template({
        entities: this.collection.toJSON(),
        showEditLink: this.showEditLink
      }))
      .trigger('scrollable:resize');
  }
});
