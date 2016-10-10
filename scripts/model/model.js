(function(module) {

  var lyrics = {};

  // Make a request to get song data
  lyrics.request = function(inputLyrics) {
    $.ajax({
      url: 'https://api.genius.com/search?q=' + inputLyrics,
      method: 'GET',
      data: 'access_token=' + geniusToken
    }).done(function(returnedData) {
      console.log('model.js AJAX request: ', returnedData);
    }).fail(function(jqxhr, status) {
      console.log('model.js AJAX request Call failed: ' + status, jqxhr);
    });
  };

  module.lyrics = lyrics;

})(window);
