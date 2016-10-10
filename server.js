var express = require('express'),
  requestProxy = require('express-request-proxy'),
  port = process.env.PORT || 3000,
  app = express();

function proxyGenius(request, response) {
  (requestProxy({
    url: 'https://api.genius.com/' + request.params[0],
    headers: {Authorization: 'Bearer ' + process.env.ACCESS_TOKEN}
  }))(request, response);
}

app.get('/genius/*', proxyGenius);

app.use(express.static('./'));

app.listen(port, function() {
  console.log('Server started on port ' + port + '!');
});
