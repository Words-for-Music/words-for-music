var $ = require('jquery');
var ACCESS_TOKEN = '_RQKM06YZlIttxWOMzFov-G_d8U4CzUnbW9H5AO0fS7j4voUEQff3m2i6gvbhQCz';
var request = $.ajax({
  url: 'https://api.genius.com/search?q=Kendrick%20Lamar',
  method: 'GET',
  headers: {
    Authorization: 'Bearer ' + ACCESS_TOKEN,
    'Content-Type': 'application/json'
  }
  // access_token: ACCESS_TOKEN
}).done(function(returnedData) {
  console.log(returnedData);
}).fail(function(jqxhr, status) {
  console.log('Call failed: ' + status, jqxhr);
});
