var $ = require('jquery');
var request = $.ajax({
  // TODO: This ajax request currently duplicates some code contained in the proxyGenius function in server.js; it needs to be refactored a bit so the two requests properly work together.
  url: 'https://api.genius.com/',
  method: 'GET',
  headers: {
    Authorization: 'Bearer ' + ACCESS_TOKEN,
    'Content-Type': 'application/json'
  }
}).done(function(returnedData) {
  console.log(returnedData);
}).fail(function(jqxhr, status) {
  console.log('Call failed: ' + status, jqxhr);
});
