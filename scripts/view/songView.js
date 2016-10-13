(function(module){

  var lyricsView = {};

  // Handlebars template call
  var songCompiler = Handlebars.compile($('#songs-template').text());

  // Handle search input
  var search = function() {
    // we need to grab the name from input, if entered
    var userName = $('#search_section input:first-of-type').val();
    if (userName) {
      var storeKey = userName.toUpperCase();
      if (localStorage.playlist.getItem(storeKey)) {
        // Our data is already in localStorage, Retrieve it
        console.log('playlist is in local storage:', storeKey);
        var storedData = JSON.parse(localStorage.getItem(storeKey));
        mixtapeView.loadPlaylist(storedData);
        alert('Your playlist is loaded: ' + storeKey);
      };
      // also set the input name to the equivalent field on the mixtape view.
      $('#mixtape input').text(userName);
    };

    // call AJAX
    var inputLyrics = $('#search_section input:last-of-type').val();
    inputLyrics = encodeURI(inputLyrics);
    lyrics.request(inputLyrics, musicData.getArtistData, lyricsView.renderSongs);
  };

  // handle input events if user clicks or presses enter.
  $('#search_now').on('click', search);
  $('input').keyup(function(e) {
    if(e.keyCode === 13) {
      search();
    }
  });

  // this will render the set of Songs using the template.
  lyricsView.renderSongs = function() {
    // only render if we have songs, otherwise display message.
    $('#search_section p').empty();
    if (lyrics.allSongs.length){
      $('#song_display').empty()
      .append(lyrics.allSongs.map(songCompiler));
      mixtapeView.addButton();
    } else {
      $('#song_display').text('No songs returned from search. Please try again.');
    };
  };

  module.lyricsView = lyricsView;

})(window);
