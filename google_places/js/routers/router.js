GooglePlaces.Routers.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    "": "index",
  },

  index: function () {
    // The collection here is not used, but it is easier to refactor given that
    // there already exists a collection. For instance, we can add a comparator
    // to the collection which will allow ordering by price.
    this.placesCollection = this.placesCollection || new GooglePlaces.Collections.Places();
    var view = new GooglePlaces.Views.PlacesIndex({collection: this.placesCollection});
    this.swapView(view);
  },

  // This is unnecessary as there is only one major view. However, this is easier to expand upon
  swapView: function(view) {
    this._view && this._view.remove();
    this._view = view;
    this.$rootEl.html(view.$el);
    view.render();
  },
})
