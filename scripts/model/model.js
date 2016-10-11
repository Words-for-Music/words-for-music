(function(module) {

  var lyrics = {};

  lyrics.allSongs = [];

  // Make a request to get song data
  lyrics.request = function(inputLyrics, nextFunction) {
    $.ajax({
      url: 'genius/' + inputLyrics
    }).done(function(returnedData) {
      returnedData.response.hits.forEach(function(tune) {
        // get the actual song data searched for
        return lyrics.allSongs.push(tune.result);
      });
      nextFunction();
    }).fail(function(jqxhr, status) {
      console.log('model.js AJAX request Call failed: ' + status, jqxhr);
    });
  };

  module.lyrics = lyrics;

})(window);
