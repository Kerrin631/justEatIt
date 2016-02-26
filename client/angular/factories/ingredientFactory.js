myAppModule.factory('ingredientFactory', function($http){
          // The factory is nothing more than a function that returns an object
          var recipes = [];
          var ingredients = []
          // var answers = []
          // console.log(questions)
          var factory = {};
          // Add a getquestions key to the factory object with a value of a function.
          factory.submitIngredients = function (info, callback){
              // Pass the questions to a callback to be used by whoever calls the method
              console.log('hello there', info)
              $http.post('/foodQuery', info).success(function(res){
                // console.log(res, 'hiKERRIN')
              	recipes = JSON.parse(res);
                console.log(recipes)
              	callback(recipes); 
              })
              return recipes;
          };

        factory.getIngredients = function (info, callback){
          console.log('hi im kerrin', info)
          // info = string(info)
          $http.post('/ingredientQuery', info).success(function(res){
            ingredients = JSON.parse(res);
            console.log(ingredients);
            callback(ingredients)
          })
          return ingredients
        }



          // Most important step: return the object so it can be used by the rest of our angular code
          // console.log(factory);
          return factory;

      });