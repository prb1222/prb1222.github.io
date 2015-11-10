window.GooglePlaces = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    // Checks to see if geolocation is available
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){
          // This function is asynchronous, and will update the search service
          // if and when the user shares their location.
          GooglePlaces.userLocation = [position.coords.latitude, position.coords.longitude];
          GooglePlaces.map = new google.maps.Map(document.getElementById('map'), {
              center: GooglePlaces.userLocation,
              zoom: 15
          });
          GooglePlaces.service = new google.maps.places.PlacesService(GooglePlaces.map);
        });
    } else {
        alert("Geolocation is not supported by this browser. Defaulting location...");
    }

    // This defaults the location until the callback gets the user location
    // The search code references GooglePlaces.service which will point to the default
    // location before the callback, and the new location afterwards.
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
