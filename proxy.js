var port = process.env.PORT || 8080;

var httpProxy = require('http-proxy');
var express = require('express');

var app = express();
var apiProxy = httpProxy.createProxyServer();

app.get("/*", function(req, res){ 
  apiProxy.web(req, res, { target: 'https://s3-eu-west-1.amazonaws.com/geoserver-test/TK_EPSG_3067/openlayers_amazonaws_0-17.html' });
});

app.listen(port);
console.log("Proxy Server started! Open http://localhost:" + port + " in your web browser to test locally.");