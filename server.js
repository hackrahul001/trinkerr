var express = require('express');               //Packages Import
var path = require('path');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var request = require('request');
var cookieParser = require('cookie-parser')
var passport = require('passport');
var http = require('http');
var https = require('https');
var fs = require('fs');
const mongoDBConnection = require('./helper/mongoDbConnection')
const appRoutes = require('./routes');

var app = express();


var port = 8000;
app.get("/",function(req,res) {
    res.send("welcome to Trinkerr.....")
})
// set up our express application
app.set('port', port);
app.use(bodyParser.json());
app.use(cookieParser("secretcode"));
app.use(bodyParser.json({limit: '1024mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // set up ejs for templating
app.use(express.static(path.join(__dirname, 'public')));
app.disable('x-powered-by');
app.use(express.static(path.join(__dirname, 'node_modules')));

app.use(passport.initialize());
//app.use(passport.session());

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (obj, done) {
    done(null, obj);
});

appRoutes.initRoutes(app)

app.listen(port);


http.createServer(app);


//httpServer.listen(port);
//httpsServer.listen(8443);

module.export = app;