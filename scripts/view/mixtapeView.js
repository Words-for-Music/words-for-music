(function(module) {

  var mixtapeView = {};

  // Handlebars template call
  var mixtapeCompiler = Handlebars.compile($('#mixtape-template').text());

  // load existing playlist data
  mixtapeView.loadPlaylist = function(dataPassedIn) {
    dataPassedIn.forEach(function(ele) {
      mixtape.mixList.push(ele);
    });
    mixtapeView.renderMixtape();
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
  mixtapeView.saveList = function(event) {
    event.preventDefault();
    var userName = $('#mixtape input').val();
    if (userName) {
      var storeKey = userName.toUpperCase() + '_playlist';
      // Store the playlist data in localStorage
      localStorage.setItem(storeKey, JSON.stringify(mixtape.mixList));
      mixtapeView.retrieveList(event);
    } else {
      alert('Playlists cannot be saved without a name');
    };
  };

  // handle Retrieve Playlist click
  mixtapeView.retrieveList = function(event) {
    event.preventDefault();
    var playlistName = $('#mixtape input').val();
    if (playlistName) {
      var storeKey = playlistName.toUpperCase() + '_playlist';
      if (localStorage.getItem(storeKey)) {
        // clear any prior list first.
        mixtape.mixList = [];
        // Our data is already in localStorage, Retrieve it
        var storedData = JSON.parse(localStorage.getItem(storeKey));
        mixtapeView.loadPlaylist(storedData);
        loadName(playlistName);
      } else {
        alert('No playlist by that name found');
      };
    } else {
      alert('Playlists cannot be found without a name');
    };
  };

  var loadName = function(theName) {
    // also set the input name to the equivalent field on the mixtape view.
    $('#search_section input:first-of-type').val(theName);
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

  // set Event Handlers.
  $('.retrieve_playlist').on('click', mixtapeView.retrieveList);
  $('.save_playlist').on('click', mixtapeView.saveList);

  module.mixtapeView = mixtapeView;

})(window);
