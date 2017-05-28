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
    // if you're only using this in the one place it's probably ok to just
    // clear out the array and make a note of the fact that that's what
    // you're doing. It's definitely good to namespace things in functions
    // and methods but it's also good to not do that until you need to
    lyrics.clearSearchResults();
    $.ajax({
      url: '/genius/' + inputLyrics
    }).done(function(returnedData) {
      if (returnedData.response.hits.length) {
        returnedData.response.hits.forEach(function(tune) {
          // stash the actual song data searched for
          // returning in forEach doesn't do anything.
          // you're not hurting anything by having it here
          // but you're not helping anything either
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
