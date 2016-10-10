// put this in an IIFE

// Make a request to get song data
var request = function() {
  $.ajax({
    url: '/genius/dummyData',
    method: 'GET'
  }).done(function(returnedData) {
    console.log('model.js AJAX request: ', returnedData);
  }).fail(function(jqxhr, status) {
    console.log('model.js AJAX request Call failed: ' + status, jqxhr);
  });
};

request();
