var ScrollableView = Backbone.View.extend({
  events: {
    'scrollable:resize': 'setHeight'
  },

  setHeight: function () {
    var availableHeight = this.$el.parent().outerHeight();

    this.$el.siblings(':not(.scrollable)').each(function () {
      availableHeight -= $(this).outerHeight();
    });

    this.$el.height(Math.min(this.el.scrollHeight, availableHeight));

    return false;
  },

  initialize: function (options) {
    this.template = options.template;

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
