(function(module){

  var lyricsView = {};

  // Handlebars template call
  var songCompiler = Handlebars.compile($('#songs-template').text());

  // Handle search input
  var search = function() {
    // disable search button to prevent multiple clicks while searching
    document.getElementById('search_now').disabled=true;
    document.getElementById('search_now').textContent = 'Wait ...';
    // we need to grab the name from input, if entered
    var userName = $('#search_section input:first-of-type').val();
    if (userName) {
      if (mixtape.mixList.length === 0) {
        var storeKey = userName.toUpperCase() + '_playlist';
        if (localStorage.getItem(storeKey)) {
          // Our data is already in localStorage, Retrieve it
          var storedData = JSON.parse(localStorage.getItem(storeKey));
          // clear prior data from list
          // console.log('clearing prior data from list');
          // mixtape.mixList = [];
          mixtapeView.loadPlaylist(storedData);
        };
      };
      // also set the input name to the equivalent field on the mixtape view.
      $('#mixtape input').val(userName);
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

  // handle reset button
  $('#reset-button').on('click', function() {
    mixtape.mixList = [];
    $('#song_display').empty();
    $('input').val('');
    $('#search_now').text('Search').prop('disabled', false);
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
    $('#search_now').text('Search').prop('disabled', false);
    $('#reset-button').css('display', 'inline-block');
  };

  module.lyricsView = lyricsView;

})(window);
