var express = require('express');
var loader = require('./loader.js')

var app = new express()

app.use (express.static(__dirname + "/page"));

app.listen(12306);

loader(app);