GooglePlaces.Views.PlacesIndex = Backbone.View.extend({
  template: _.template($('#index-template').html()),

  initialize: function () {
    this.listenTo(this.collection, "add", this.addPlaceItem);
    $(document).on('keydown', this.handleKey.bind(this));
  },

  handleKey: function (event) {
    if (event.keyCode === 13) {
      this.executeSearch();
   }
  },

  events: {
    "click #submit-button":"executeSearch"
  },

  render: function () {
    this.$el.html(this.template());
    GooglePlaces.autocomplete = GooglePlaces.autocomplete || new google.maps.places.Autocomplete(document.getElementById('search-field'), {});
    this.collection.each(function(place){
      this.addPlaceItem(place);
    }.bind(this));
    return this;
  },

  addPlaceItem: function (place) {
    var placeItemView = new GooglePlaces.Views.PlaceItem({model: place});
    $('ul.index-feed').append(placeItemView.render().$el);
  },

  executeSearch: function () {
    var searchText = $('#search-field').val();
    $('ul.index-feed').empty().html('<i class="fa fa-spinner fa-spin center"></i>');
    GooglePlaces.service.textSearch({query: searchText}, this.parseResults.bind(this));
  },

  parseResults: function (results) {
    $('ul.index-feed').empty();
    if (!results.length) {
      $('ul.index-feed').html("<div class='center'>No results found.</div>");
      return;
    }
    results.forEach(function(result){
      var place = new GooglePlaces.Models.Place(result);
      this.addPlaceItem(place);
    }.bind(this));
  }
});
