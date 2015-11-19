// Dependencies
var express = require('express');
var session = require('express-session');
//var passport = require('./services/passport');
var passport = require('./Controllers/passportCtrl');
var bodyParser = require('body-parser');
var cors = require('cors');
//var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');

// Controllers
var UsersCtrl = require('./Controllers/UsersCtrl');
var ProductsCtrl = require('./Controllers/ProductsCtrl');
// Express
var app = express();

// Middleware
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../public'));
app.use(cors());
app.use(session({
    secret : 'blah',
    saveUninitialized : true,
    resave : true
}));
app.use(passport.initialize());
app.use(passport.session());

var isAuthed = function(req, res, next){
    if(!req.isAuthenticated()) return res.senStatus(401);
    return next();
};

//passport.use(new LocalStrategy({
//    usernameField: 'email',
//    passwordField: 'passwd'
//  },
//  function(username, password, done) {
//    // ...
//  }

// Endpoints -- VIEW -- CRUD
//app.get('/user', UserCtrl.me);
app.post('/user', UsersCtrl.create);
app.get('/users', UsersCtrl.read);
app.put('/users/remove', UsersCtrl.remove);
app.put('/user', isAuthed, UsersCtrl.update);
app.post('/login', passport.authenticate('local'), function(req, res) {
    if(!req.user){
		res.redirect('/#/');
	}
    res.send(req.user); // redirect to the secure profile section
  });
app.get('/logout', function(req, res){
    req.logout();
    req.session.destroy(function(err){
        res.redirect('/');
    });
});

app.post('/Products', ProductsCtrl.create);
app.get('/Products', ProductsCtrl.read);
app.get('/Products/:id', ProductsCtrl.show);
app.put('/Products/remove', ProductsCtrl.remove);
app.put('/Products/:id', ProductsCtrl.update);

// Connections
var port = process.env.PORT;
var mongoURI = process.env.MONGO_LABS_URI;

mongoose.set('debug', true);
mongoose.connect(mongoURI);
mongoose.connection.once('open', function() {
  console.log('connected to mongoDB at: ', mongoURI);
});

app.listen(port, function() {
  console.log('listening on port ', port);
});