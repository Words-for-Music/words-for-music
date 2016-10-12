(function(module) {

  var musicData = {};

  musicData.allItunes = [];

  getArtistData = function(){
    for(var i=0; i < lyrics.allSongs.length; i++){
      var endpoint = encodeURI(lyrics.allSongs[i].primary_artist.name + '+' + lyrics.allSongs[i].title + '&limit=1');
      console.log(endpoint);
      $.ajax({
        url: 'itunes/' + endpoint
      }).done(function(data){
        var artistData = JSON.parse(data.text);
        console.log(artistData);
        musicData.allItunes.push(artistData);
        // console.log(lyrics.allSongs[i].primary_artist.name);
      }).fail(function(jqxhr, status){
        console.log('itunes AJAX request Call Failed: ', status, jqxhr);
      });
    };
  };

  pushArtistData = function(){
    musicData.allItunes.forEach(data)({
      if(lyrics.allSongs.title === data) {
        
      }
    });
  }

  module.musicData = musicData;
})(window);
