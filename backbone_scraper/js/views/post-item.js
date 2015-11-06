FlickrFeed.Views.PostItem = Backbone.View.extend({
  template: _.template($('#feed-item-template').html()),

  tagName: "li",

  className: "index-item-view",

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    this.$el.html(this.template({post: this.model}));
    return this;
  }
});
