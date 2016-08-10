var BaseView = Backbone.View.extend({
  events: {
    'click [href="#foo"]': 'clickFoo'
  },

  clickFoo: function () {
    console.log('clickFoo');
  }
});
