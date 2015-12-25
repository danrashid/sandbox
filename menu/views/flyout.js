var FlyoutView = Backbone.View.extend({
  events: {
    'click [data-scrollable-id]': 'toggleScrollable'
  },

  closeScrollables: function () {
    this.$('[data-scrollable-id].open, .scrollable.open').removeClass('open');
  },

  toggleScrollable: function (e) {
    var $scrollableLink = $(e.target),
      $scrollable = $('#' + $scrollableLink.data('scrollableId'));

    if ($scrollableLink.hasClass('open')) {
      $scrollableLink.add($scrollable).removeClass('open');
    } else {
      this.closeScrollables();
      $scrollableLink.add($scrollable).addClass('open');
      $scrollable.trigger('scrollable:resize');
    }

    return false;
  }
});
