var mongoose = require('mongoose');
// var passport = require('passport');
var recipe = require('./../controllers/recipes.js')
var user = require('./../controllers/users.js')

  module.exports = function(app) {
  // verb: get, plural of target as the URI is the RESTful index method (it returns all customers)
	app.post('/foodQuery', function(req, res) {
		console.log('hola', req.body)
		recipe.sendLeftOvers(req, res);
		// console.log(res, 'response')
	});

	app.post('/ingredientQuery', function(req, res) {
		// console.log('please work')
		recipe.getIngredients(req, res)
	});

	//register and log in routes
	app.post('/newUser', function(req, res) {
		// console.log('its working', req.body)
		user.register(req, res)
	});

	app.post('/validate', function(req, res) {
		user.validate(req, res)
	});

	// route for favorites
	app.post('/addFavorites', function(req, res) {
		console.log('routes', req.body)
		user.addFavorite(req, res)
	});

	app.get('/findFav/:id', function (req, res){
		user.findFaves(req, res)
	})
};