var servi = require('servi');
var app = new servi(true);

port(3222);

serveFiles("public_html");

start();
