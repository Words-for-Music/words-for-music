
var express = require('express'),
  requestProxy = require('express-request-proxy'),
  port = process.env.PORT || 3000,
  app = express();

function proxyGenius(request, response) {
  console.log('proxyGenius starting ', request.params);
  (requestProxy({
    url: 'https://api.genius.com',
    type: 'GET',
    headers: {
      Authorization: 'Bearer ' + process.env.ACCESS_TOKEN,
      'Content-Type': 'application/json'}
  }))(request, response);
  // console.log('proxyGenius after proxy call: ', request.url);
};

app.get('/genius/*', proxyGenius);

app.use(express.static('./'));

app.get('*', function(request, response) {
  console.log('New request:', request.url);
  response.sendFile('index.html', { root: '.'});
});

app.listen(port, function() {
  console.log('Server started on port ' + port + '!');
});
