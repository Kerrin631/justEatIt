myAppModule.factory('userFactory', function($http){
          // The factory is nothing more than a function that returns an object
          var users = [];
          var factory = {};
          var message = {}
          
          factory.addUser = function (info, callback){
              // Pass the questions to a callback to be used by whoever calls the method
              // console.log('hello there', info)
              $http.post('/newUser', info).success(function(res){
                // console.log(res, 'hiKERRIN');
              	// message = JSON.parse(res);
                // console.log(res)
              	callback(res); 
              })
              return users;
          };


          factory.validateUser = function (info, callback) {
            // console.log('KERRIN', info)
            $http.post('/validate', info).success(function(res){
              console.log(res)
              callback(res)
            })
          };

          factory.addFavorite = function (info, callback) {
            $http.post('/addFavorites', info).success(function(res) {
              console.log('its working', res);
              callback(res)
            })
          };

          factory.getFavorites = function (info, callback) {
            var id = info
            // console.log(id)
            $http.get('/findFav/' + id).success(function(res) {
              allFaves = res;
              // console.log(allFaves);
              callback(allFaves);
            })
          }

          // Most important step: return the object so it can be used by the rest of our angular code
          // console.log(factory);
          return factory;
      });