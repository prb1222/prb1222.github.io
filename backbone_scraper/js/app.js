window.FlickrFeed = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var router = new FlickrFeed.Routers.Router({$rootEl: $('div#content')});
    Backbone.history.start();
  }
};
