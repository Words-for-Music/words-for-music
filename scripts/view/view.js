(function(module){

  var lyricsView = {};

  // Handlebars template call
  var songCompiler = Handlebars.compile($('#songs-template').text());

  // an event handler for search input.
  $('#search_now').on('submit click', function() {
    // call AJAX
    var inputLyrics = $('#search_section input').val();
    inputLyrics = encodeURI(inputLyrics);
    lyrics.request(inputLyrics, lyricsView.renderSongs);
  });

  // this will render the set of Songs using the template.
  lyricsView.renderSongs = function() {
    $('#about ul').empty()
    .append(lyrics.allSongs.map(songCompiler));
  };

  // // get the data and pass the render function as a callback.
  // lyricsView.requestRepos(lyricsView.renderSongs);

  module.lyricsView = lyricsView;

})(window);
