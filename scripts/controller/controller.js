(function(module) {

//controller used to show search_section of our page at load and when returned to Home
  var searchController = {};

  searchController.reveal = function() {
    $('.tab-content').hide();
    $('#search_section').fadeIn();
  };

//controller used to navigate to the mixtape section of our page
  var mixtapeController = {};

  mixtapeController.reveal = function() {
    $('.tab-content').hide();
    mixtapeView.renderMixtape();
    $('#mixtape').fadeIn().css('display', 'flex');
  };

////controller used to navigate to the about section of our page
  var aboutController = {};

  aboutController.reveal = function() {
    $('.tab-content').hide();
    $('#about').fadeIn().css('display', 'flex');
  };

  module.searchController = searchController;
  module.mixtapeController = mixtapeController;
  module.aboutController = aboutController;
})(window);
