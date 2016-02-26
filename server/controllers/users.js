var mongoose = require('mongoose');
var user = mongoose.model('User');


// Edit the show method as follows
module.exports = (function() {
	return {

		register: function(req, res) {
			user.find({email: req.body.email}, function(err, results) {
    			if(err) {
    				console.log(err, 'error');
    			} else {
    				console.log(results);
        			if (results == '') {
        				var newUser = new user({first_name: req.body.first_name, last_name: req.body.last_name, email: req.body.email, password: req.body.password})
        				console.log(newUser)
						newUser.save(function(err){
							if (err){
								console.log(err, 'error')
							} else {
								console.log('Success')
								res.json({message: 'You have successfully registered'})
							}
						})
        			} else {
        				console.log('already exists')
        				res.json({message: 'This email already exists'})
        			}
    			}
			})
		},

		validate: function(req, res) {
			user.find({email: req.body.email, password: req.body.password}, function(err, results) {
				if(err) {
					console.log(err, 'error')
				} else {
					console.log(results, "results")
					if (results == '') {
						res.json({message: 'Email/Password combination do not match'})
					}
					else
					{
						results['message'] = 'You have successfully logged in!'
						console.log('testing', results)
						res.json(results)
					}
				}
			})
		},

		addFavorite: function(req, res) {
			// console.log*req.body.userID
			user.update({_id: req.body.userID.id}, {$push: {favorites: {$each: [{title: req.body.recipe.title, image: req.body.recipe.image_url, ingredients: req.body.recipe.ingredients, link: req.body.recipe.source_url}]}}}, function(err, result) {
				if(err) {
					console.log(err, 'error');
				} else {
					console.log('successfully added favorite')
				}
			})
			res.end()
		},

		findFaves: function(req, res) {
			user.find({_id: req.params.id}, function(err, results) {
				if(err) {
					console.log('could not fetch favorites', err)
				} else {
					console.log('success pulling favorites')
					res.json(results)
				}
			})
		}
	}
})();
// note that this is just a code snippet of the show method from the object returned in the controller (this includes the exports module.exports
