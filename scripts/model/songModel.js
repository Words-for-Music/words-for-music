(function(module) {

  var lyrics = {};

  lyrics.allSongs = [];

  lyrics.clearSearchResults = function(){
    // simply clear out any possible existing search results.
    lyrics.allSongs = [];
  };

  // Make a request to get song data
  lyrics.request = function(inputLyrics, getArtistData, renderSongs) {
    // clear out any prior call data
    lyrics.clearSearchResults();
    $.ajax({
      url: '/genius/' + inputLyrics
    }).done(function(returnedData) {
      if (returnedData.response.hits.length) {
        returnedData.response.hits.forEach(function(tune) {
          // stash the actual song data searched for
          return lyrics.allSongs.push(tune.result);
        });
      };
      getArtistData(renderSongs);
    }).fail(function(jqxhr, status) {
      console.log('model.js AJAX request Call failed: ' + status, jqxhr);
      alert('ERROR in search call.');
    });
  };

  module.lyrics = lyrics;

})(window);
