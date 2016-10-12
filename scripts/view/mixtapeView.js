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
  mixtapeView.renderMixtape = function() {
    var $theList = $('#mixtape ul');
    $theList.empty();
    mixtape.mixList.forEach(function(songItem){
      $theList.append(mixtapeCompiler(songItem));
    });
  };
  
  module.mixtapeView = mixtapeView;

})(window);
