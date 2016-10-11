(function(module) {

  var mixtapeView = {};

  // Handlebars template call
  var mixtapeCompiler = Handlebars.compile($('#mixtape-template').text());

  // handle a click on the add button
  mixtapeView.addButton = function() {
    $('.add-button').on('click', function() {
      mixtape.mixList.push($(lyrics.allSongs[0]));
      console.log($(mixtape.mixList));
      mixtapeView.renderMixtape();
    });
  };

  mixtapeView.renderMixtape = function() {
    $('#mixtape ul').empty().append(mixtape.mixList.map(mixtapeCompiler));
  };

  module.mixtapeView = mixtapeView;

})(window);
