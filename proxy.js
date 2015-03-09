var port = process.env.PORT || 8080;

var httpProxy = require('http-proxy');
var express = require('express');

var app = express();
var apiProxy = httpProxy.createProxyServer();

app.get("/*", function(req, res){ 
  apiProxy.web(req, res, { target: 'http://www.iltalehti.fi' });
});

app.listen(port);
console.log("Proxy Server started! Open http://localhost:" + port + " in your web browser to test locally.");