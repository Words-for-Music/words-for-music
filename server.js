
var express = require('express'),
  requestProxy = require('express-request-proxy'),
  port = process.env.PORT || 3000,
  app = express(),
  superagent = require('superagent');

function proxyGenius(request, response) {
  (requestProxy({
    url: 'https://api.genius.com/search' + request.params[0],
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + process.env.ACCESS_TOKEN,
      'Content-Type': 'application/json'}
  }))(request, response);
};

function superagtGenius(request, response){
  superagent('https://api.genius.com/search?q=' + request.params[0])
  .set('Authorization', 'Bearer ' + process.env.ACCESS_TOKEN)
  .end(function(err, res) {
    if (!err) {
      console.log('superagtGenius successful: ', res.body);
      response.json(res.body);
    } else {
      console.log('superagtGenius error: ', err);
    }
  });
};

app.get('/genius/*', superagtGenius);
// app.get('/genius/*', proxyGenius);

//function to get Itunes API information
function superagtGeniusItunes(request, response){
  superagent('https://itunes.apple.com/search?term=' + request.params[0])
  .end(function(err, res){
    if (!err){
      console.log('superagtGeniusItunes successful: ', res.body);
    } else {
      console.log('superagtGeniusItunes error: ', err);
    }
  });
};

app.get('/itunes.apple.com', superagtGeniusItunes);

app.use(express.static('./'));

app.get('*', function(request, response) {
  console.log('New request:', request.url);
  response.sendFile('index.html', { root: '.'});
});

app.listen(port, function() {
  console.log('Server started on port ' + port + '!');
});
