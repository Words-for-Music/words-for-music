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
    $('#mixtape').fadeIn().css('display', 'flex');
  };

  var aboutController = {};

  aboutController.reveal = function() {
    $('.tab-content').hide();
    $('#about').fadeIn().css('display', 'flex');
  };

  module.searchController = searchController;
  module.mixtapeController = mixtapeController;
  module.aboutController = aboutController;
})(window);
