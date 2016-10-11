(function(module){

  var lyricsView = {};

  // Handlebars template call
  var songCompiler = Handlebars.compile($('#songs-template').text());

  // an event handler for search input.
  $('#search_now').on('click', function() {
    // call AJAX
    var inputLyrics = $('#search_section input').val();
    inputLyrics = encodeURI(inputLyrics);
    lyrics.request(inputLyrics, lyricsView.renderSongs);
  });

  // this will render the set of Songs using the template.
  lyricsView.renderSongs = function() {
    // Hide the paragraph of instructions, then empty and append the list of search results
    $('#search_section p').empty();
    $('#song_display').empty()
    .append(lyrics.allSongs.map(songCompiler));
  };

  module.lyricsView = lyricsView;

})(window);
