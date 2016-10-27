(function(module){

  var lyricsView = {};

  // Handlebars template call
  var songCompiler = Handlebars.compile($('#songs-template').text());

  // Handle search input
  var search = function() {
    // we need to grab the playlist name from input, if entered
    var userName = $('#search_section input:first-of-type').val();
    if (userName) {
      if (mixtape.mixList.length === 0) {
        var storeKey = userName.toUpperCase() + '_playlist';
        if (localStorage.getItem(storeKey)) {
          // Our data is already in localStorage, retrieve it
          //you may still want to wrap your JSON.parse call in a try/catch in case
          //somehow something got stored on localStorage that wasn't undefined but
          //also wasn't valid JSON
          var storedData = JSON.parse(localStorage.getItem(storeKey));
          // clear prior data from list
          mixtapeView.loadPlaylist(storedData);
        };
      };
      // also set the input playlist name to the equivalent field on the mixtape view.
      $('#mixtape input').val(userName);
    };
    var inputLyrics = $('#search_section input:last-of-type').val();
    // make sure we don't search if nothing was entered in the search field.
    if (inputLyrics) {
      // disable search button to prevent multiple clicks while searching
      document.getElementById('search_now').disabled=true;
      document.getElementById('search_now').textContent = 'Wait ...';
      // call AJAX
      inputLyrics = encodeURI(inputLyrics);
      lyrics.request(inputLyrics, musicData.getArtistData, lyricsView.renderSongs);
    };
  };

  // handle input events if user clicks or presses enter.
  $('#search_now').on('click', search);
  $('input').keyup(function(e) {
    //nice idea! You may also want to prevent default. It could be fine here without
    //it but keep in mind that in a lot of cases HTML elements are already listening
    //for enter
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
    $('#reset-button').css('display', 'none');
  });

  // this will render the set of Songs returned using the template.
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
