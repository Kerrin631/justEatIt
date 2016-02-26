var mongoose = require('mongoose');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');


var UserSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  password: String,
  favorites: [{
  	title: String,
  	image: String,
  	ingredients: Array,
  	link: String
  }]
});

// //Create a setPassword() method on the User model that accepts a password then generates a salt and associated password hash.
// UserSchema.methods.setPassword = function(password){
//   this.salt = crypto.randomBytes(16).toString('hex');

//   this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
// };

// //Create a validPassword() method that accepts a password and compares it to the hash stored, returning a boolean.
// UserSchema.methods.validPassword = function(password) {
//   var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');

//   return this.hash === hash;
// };

// //Create the generateJWT() instance method on UserSchema with the following code:
// UserSchema.methods.generateJWT = function() {

//   // set expiration to 60 days
//   var today = new Date();
//   var exp = new Date(today);
//   exp.setDate(today.getDate() + 60);

//   return jwt.sign({
//     _id: this._id,
//     username: this.username,
//     exp: parseInt(exp.getTime() / 1000),
//   }, 'SECRET');
// };

mongoose.model('User', UserSchema);
// notice that we aren't exporting anything -- this is because this file will be run when we require it using our config file and then since the model is defined we'll be able to access it from our controller
