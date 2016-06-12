var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
var calculations = require('../modules/calculator.js');


var server = app.listen(process.env.PORT || 3000, function(){
  console.log( 'server listening on port 3000' )
});

app.get("/", function(req, res){
  res.sendFile (path.resolve ('./index.html'));
});

app.post("/calculate", urlencodedParser,  function (req, res){
  console.log("server post:");
  console.log(req.body);

  res.sendFile (path.resolve ('./index.html'));
  var generateNumber = calculations(req.body);
  res.send("" + generateNumber);


});

app.use(express.static('public'));
