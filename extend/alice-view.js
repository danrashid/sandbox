var AliceView = BaseView.extend({
  events: {
    'click [href="#bar"]': 'clickBar'
  },

  clickBar: function () {
    console.log('clickBar');
  }
});
