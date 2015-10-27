var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

var User = require('../Models/Users');



// used to serialize the user for the session
passport.serializeUser(function(user, done) {
    done(null, user.id);
});

// used to deserialize the user
passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

passport.use(new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
  function(req, email, password, done) {
    User.findOne({ email: email }, function (err, user) {
      if (err) { 
          console.log(err)
          return done(err); 
      }
      if (!user) {
//        return done(null, false, { message: 'Incorrect username.' });
          return done(null, false);

      }
      if (!user.verifyPassword(password)) {
          return done(null, false);

//        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

module.exports = passport;