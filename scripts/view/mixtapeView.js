(function(module) {

  var mixtapeView = {};

  // Handlebars template call
  var mixtapeCompiler = Handlebars.compile($('#mixtape-template').text());

  // handle a click on the add button
  mixtapeView.addButton = function() {
    $('.add-button').on('click', function() {
      var songObj = {};
      songObj.full_title = $(this).data('song');
      mixtape.mixList.push(songObj);
    });
  };

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

  // handle a click on the remove button
  // mixtapeView.remove = function() {
  // };

  // render the mixtape list
  mixtapeView.renderMixtape = function() {
    var $theList = $('#mixtape ul');
    $theList.empty();
    mixtape.mixList.forEach(function(songItem){
      $theList.append(mixtapeCompiler(songItem));
    });
    mixtapeView.minusButton();
  };

  module.mixtapeView = mixtapeView;

})(window);
