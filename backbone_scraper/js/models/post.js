FlickrFeed.Models.Post = Backbone.Model.extend({
  collection: FlickrFeed.Collections.Posts,

  parse: function (response) {
    var parsed_response = {};

    if (response.title) {
      parsed_response.title = response.title;
    }

    if (response.link) {
      parsed_response.link = response.link;
    }

    if (response.published) {
      parsed_response.published = moment(response.published).format("Do MMM YYYY [at] h[:]mm A");
      parsed_response.rawDate = response.published;
    }

    if (response.tags) {
      parsed_response.tags = response.tags;
    }

    if (response.author) {
      var authorRegex = /\(.+\)/;
      parsed_response.author = authorRegex.exec(response.author)[0].replace(/\(|\)/g, "");
    }

    if (response.author_id) {
      parsed_response.author_id = response.author_id;
    }

    if (response.media) {
      parsed_response.image_url = response.media.m;
    }

    if (response.author_id && response.published) {
      parsed_response.id = response.author_id + '_' + response.published;
    }

    if (response.description) {
      var strArray = response.description.split("</p> ");
      parsed_response.description = strArray[strArray.length - 1];
    }

    return parsed_response;
  }
});
