(function(module){

  var lyricsView = {};

  // an event handler for search input.
  $('#search_now').on('submit click', function() {
    // call AJAX
    var inputLyrics = $('#search_section input').val();
    inputLyrics = encodeURI(inputLyrics);
    lyrics.request(inputLyrics);
  });

  module.lyricsView = lyricsView;

})(window);
