FlickrFeed.Collections.Posts = Backbone.Collection.extend({
  url: function () {
    return "https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json";
  },

  initialize: function (models, options) {
    if (options && options.url) {this.url = options.url}
  },

  model: FlickrFeed.Models.Post,

  sync: function(method, collection, options) {
    options.dataType = "jsonp";
    options.jsonpCallback = "jsonFlickrFeed";
    return Backbone.sync(method, collection, options);
  },

  parse: function (response) {
    return response.items;
  }
});
