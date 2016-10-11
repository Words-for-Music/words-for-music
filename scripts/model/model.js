(function(module) {

  var lyrics = {};

  lyrics.allSongs = [];

  // Make a request to get song data
  lyrics.request = function(inputLyrics, nextFunction) {
    // clear out any prior call data
    lyrics.allSongs = [];
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

  var musicData = {};

  musicData.all = [];
  $.ajax({
    url: 'https://itunes.apple.com/search?term=' + 'jack+johnson'
  }).done(function(returnedData){
    console.log(returnedData);

  }).fail(function(jqxhr, status){
    console.log('itunes AJAX request Call Failed: ', status, jqxhr);
  });

  module.lyrics = lyrics;
  module.musicData = musicData;

})(window);
