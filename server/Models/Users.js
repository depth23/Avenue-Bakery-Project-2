var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var User = new mongoose.Schema({
 first: { type: String, require: true },
 last: { type: String, require: true },
 email: { type: String, unique: true, index: true, trim: true, require: true },
 password: { type: String, require: true},
 phone: { type: String, require: true },
 admin:{type:Boolean}
 
});

User.pre('save', function(next) {
    var user = this;
    if (!user.isModified('password'))    return next();
 var salt = bcrypt.genSaltSync(10);
 var hash = bcrypt.hashSync(user.password, salt);
 user.password = hash;
 return next(null, user);
});

User.methods.verifyPassword = function(reqBodyPassword) {
 var user = this;
 return bcrypt.compareSync(reqBodyPassword, user.password);
};

module.exports = mongoose.model('Users', User);