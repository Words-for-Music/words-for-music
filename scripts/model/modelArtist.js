(function(module) {

  var musicData = {};

  musicData.allItunes = [];

//Function to retrieve data from the Itunes API using the search terms from the genius API and push into musicData.allItunes
  musicData.getArtistData = function(renderSongs){
    for(var i = 0; i < lyrics.allSongs.length; i++){
      var endpoint = encodeURI(lyrics.allSongs[i].primary_artist.name + '+' + lyrics.allSongs[i].title + '&limit=1');
      $.ajax({
        url: 'itunes/' + endpoint
      }).done(function(data){
        var artistData = JSON.parse(data.text);
        musicData.allItunes.push(artistData);
        musicData.useItunesData();
        renderSongs();
      }).fail(function(jqxhr, status){
        console.log('itunes AJAX request Call Failed: ', status, jqxhr);
      });
    };
  };

//This function matches the two data sets from Genius(lyrics) and iTunes(musicData), and inserts the songplay and bio into the main array(lyrics.allsongs).
  musicData.useItunesData = function(){
    musicData.allItunes.forEach(function(element){
      if (element.results.length){
        for (var i = 0; i < lyrics.allSongs.length; i++) {
          if (lyrics.allSongs[i].title === element.results[0].trackName && lyrics.allSongs[i].primary_artist.name === element.results[0].artistName) {
            lyrics.allSongs[i].artistViewUrl = element.results[0].artistViewUrl;
            lyrics.allSongs[i].previewUrl = element.results[0].previewUrl;
          }
        }
      }
    });
  };

  module.musicData = musicData;
})(window);
