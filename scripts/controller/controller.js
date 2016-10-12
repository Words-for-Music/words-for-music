(function(module) {

  var searchController = {};

  searchController.reveal = function() {
    $('.tab-content').hide();
    $('#search_section').fadeIn();
  };

  var mixtapeController = {};

  mixtapeController.reveal = function() {
    $('.tab-content').hide();
    mixtapeView.renderMixtape();
    $('#mixtape').fadeIn();
  };

  var aboutController = {};

  aboutController.reveal = function() {
    $('.tab-content').hide();
    $('#about').fadeIn();
  };

  module.searchController = searchController;
  module.mixtapeController = mixtapeController;
  module.aboutController = aboutController;
})(window);
