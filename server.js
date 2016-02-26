var express = require('express');
// var passport = require('passport');

var path = require('path');

var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "./client")));

// app.use(passport.initialize({ extended: true }));

// This goes in our server.js file so that we actually use the mongoose config file!
require('./server/config/mongoose.js');

//require passport config for authentication
// require('./server/config/passport.js');

//always require routes AFTER requiring mongoose
require('./server/config/routes.js')(app);

app.listen(8000, function() {
 console.log("listening on port 8000");
})

