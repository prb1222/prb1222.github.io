window.GooglePlaces = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){
          GooglePlaces.userLocation = [position.coords.latitude, position.coords.longitude];
        });
    } else {
        alert("Geolocation is not supported by this browser. Defaulting location");
    }

    GooglePlaces.userLocation = new google.maps.LatLng(-33.8665433, 151.1956316);
    GooglePlaces.map = new google.maps.Map(document.getElementById('map'), {
        center: GooglePlaces.userLocation,
        zoom: 15
    });
    GooglePlaces.service = new google.maps.places.PlacesService(GooglePlaces.map);

    var router = new GooglePlaces.Routers.Router({$rootEl: $('div#content')});
    Backbone.history.start();
  }
};
