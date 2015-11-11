GooglePlaces.Views.PlaceItem = Backbone.View.extend({
  template: _.template($('#feed-item-template').html()),

  tagName: "li",

  className: "index-item-view",

  render: function () {
    this.$el.html(this.template({place: this.model}));
    return this;
  }
});
