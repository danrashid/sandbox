var LhnView = Backbone.View.extend({
  el: '#lhn',

  events: {
    'click [data-flyout-id]': 'toggleFlyout'
  },

  initialize: function () {
    $('body').on('click', this.closeFlyouts.bind(this));

    $(window)
      .on('scroll', this.setTopPosition.bind(this))
      .on('scroll resize', this.triggerScrollableResize.bind(this));
  },

  closeFlyouts: function () {
    this.$('[data-flyout-id].open, .flyout.open').removeClass('open');
  },

  setTopPosition: function () {
    this.$el.css('top', Math.max($('#top-bar').outerHeight() - $(window).scrollTop(), 0));
  },

  triggerScrollableResize: function ($flyout) {
    this.$('.flyout.open .scrollable.open').trigger('scrollable:resize');
  },

  flyoutInstantiators: {
    'brands-flyout': _.once(function () {
      new FlyoutView({
        el: '#brands-flyout'
      });

      new ScrollableView({
        collection: new ScrollableCollection(null, {path: 'brands'}),
        el: '#brands-scrollable',
        template: brandsTemplate
      });
    }),

    'behaviors-flyout': _.once(function () {
      new FlyoutView({
        el: '#behaviors-flyout'
      });

      new ScrollableView({
        collection: new ScrollableCollection(null, {path: 'behaviors'}),
        el: '#behaviors-scrollable',
        template: behaviorsTemplate
      });

      new ScrollableView({
        collection: new ScrollableCollection(null, {path: 'behavior-traits'}),
        el: '#behavior-traits-scrollable',
        template: behaviorTraitsTemplate
      });
    }),

    'user-attributes-flyout': _.once(function () {
      new FlyoutView({
        el: '#user-attributes-flyout'
      });

      new ScrollableView({
        collection: new ScrollableCollection(null, {path: 'user-attributes'}),
        el: '#user-attributes-scrollable',
        template: userAttributesTemplate
      });

      new ScrollableView({
        collection: new ScrollableCollection(null, {path: 'user-attribute-sources'}),
        el: '#user-attribute-sources-scrollable',
        template: userAttributeSourcesTemplate
      });
    }),

    'segments-flyout': _.once(function () {
      new FlyoutView({
        el: '#segments-flyout'
      });

      new ScrollableView({
        collection: new ScrollableCollection(null, {path: 'segments'}),
        el: '#segments-scrollable',
        template: segmentsTemplate
      });
    }),

    'actions-flyout': _.once(function () {
      new FlyoutView({
        el: '#actions-flyout'
      });

      new ScrollableView({
        collection: new ScrollableCollection(null, {path: 'actions'}),
        el: '#actions-scrollable',
        template: actionsTemplate
      });
    })
  },

  toggleFlyout: function (e) {
    var $flyoutLink = $(e.target),
      flyoutId = $flyoutLink.data('flyoutId'),
      $flyout = $('#' + flyoutId);

    if ($flyoutLink.hasClass('open')) {
      $flyoutLink.add($flyout).removeClass('open');
    } else {
      this.closeFlyouts();
      this.flyoutInstantiators[flyoutId]();
      $flyoutLink.add($flyout).addClass('open');
      this.$('.scrollable.open', $flyout).trigger('scrollable:resize');
    }

    return false;
  }
});
