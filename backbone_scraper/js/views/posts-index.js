FlickrFeed.Views.PostsIndex = Backbone.View.extend({
  template: _.template($('#index-template').html()),

  initialize: function () {
    this.listenTo(this.collection, "add", this.addPostItem);
    this.$searchBar = $('form.post-form-fields');
    this.$searchBar.on('submit', this.search.bind(this));
    $(window).on("resize",this.render.bind(this));
  },

  render: function () {
    this.$el.html(this.template());
    this.collection.each(function(post){
      this.addPostItem(post);
    }.bind(this));
    return this;
  },

  addPostItem: function (post) {
    var postItemView = new FlickrFeed.Views.PostItem({model: post});
    $('ul.index-feed').append(postItemView.render().$el);
    this.moveDate(postItemView);
    this.resizeTitle(postItemView);
  },

  search: function (event) {
    event.preventDefault();
    var tag = this.$searchBar.find('#title-field').val();
    this.collection = FlickrFeed.PostsCollection = new FlickrFeed.Collections.Posts(null, {url:
      "https://api.flickr.com/services/feeds/photos_public.gne?tags=" + tag + "&tagmode=all&format=json"});
    this.collection.fetch();
    this.listenTo(this.collection, "add", this.addPostItem);
    this.render();
  },

  moveDate: function (view) {
    var $date = view.$el.find('.published-date').detach();
    if ($('#content').width() < 800) {
      view.$el.find('.index-item-title').after($date);
    } else {
      view.$el.find('.author-name').after($date);
    }
  },

  resizeTitle: function (view) {
    var $hidden = view.$el.find('div.hidden');
    var $content = view.$el.find('.index-item-content');
    var title = $hidden.text();
    var truncate = false
    while ($hidden.width() > $content.width() && title.length > 4) {
      var truncate = true;
      var title = $hidden.text().slice(0, title.length - 1);
      $hidden.text(title);
    }
    if (truncate) {
      title = title.slice(0, title.length - 3) + "...";
    }
    view.$el.find('span.title-span').text(title);
  },

  remove: function() {
    $(window).off("resize",this.resizeList);
    //call the superclass remove method to ensure event handler is unbound
    Backbone.View.prototype.remove.apply(this, arguments);
  }
});
