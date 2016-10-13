(function(module) {

  var mixtapeView = {};

  // Handlebars template call
  var mixtapeCompiler = Handlebars.compile($('#mixtape-template').text());

  // load existing playlist data
  mixtapeView.loadPlaylist = function(dataPassedIn) {
    dataPassedIn.forEach(function(ele) {
      mixtape.mixList.push(ele);
    });
  };

  // handle a click on the add button
  mixtapeView.addButton = function() {
    $('.add-button').on('click', function() {
      var songObj = {};
      songObj.full_title = $(this).data('song');
      mixtape.mixList.push(songObj);
    });
  };

  // handle a click on the remove button
  mixtapeView.minusButton = function() {
    $('.minus-button').on('click', function() {
      var $currentSong = $(this).data('song');
      for (var i = 0; i < mixtape.mixList.length; i++) {
        if (mixtape.mixList[i].full_title === $currentSong) {
          mixtape.mixList.splice(i,1);
          mixtapeView.renderMixtape();
        }
      }
    });
  };

  // handle Save click
  mixtapeView.saveList = function() {
    $('.save_playlist').on('click', function(event) {
      event.preventDefault();
      var userName = $('#mixtape input').val();
      if (userName) {
        var storeKey = userName.toUpperCase() + '_playlist';
        // Store the playlist data in localStorage
        localStorage.setItem(storeKey, JSON.stringify(mixtape.mixList));
      } else {
        alert('Playlists cannot be saved with your name');
      };
    });
  };

  // render the mixtape list
  mixtapeView.renderMixtape = function() {
    var $theList = $('#mixtape ul');
    $theList.empty();
    mixtape.mixList.forEach(function(songItem){
      $theList.append(mixtapeCompiler(songItem));
    });
    mixtapeView.minusButton();
  };

  mixtapeView.saveList();

  module.mixtapeView = mixtapeView;

})(window);
