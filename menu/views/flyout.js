var FlyoutView = Backbone.View.extend({
  events: {
    'click [data-scrollable-id]': 'toggleScrollable',
    'scrollable:resize': 'setScrollableHeight'
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
  },

  setScrollableHeight: function (e) {
    var currentHeight = e.target.scrollHeight,
      availableHeight = this.$el.outerHeight();

    this.$el.children(':not(.scrollable)').each(function () {
      availableHeight -= $(this).outerHeight();
    });

    $(e.target).height(Math.min(currentHeight, availableHeight));

    return false;
  }
});
