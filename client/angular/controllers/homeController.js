//  build the controllers
    // Create a controller (attached to this module), and inject the customerFactory in it.
    // Create a module
      // var myAppModule = angular.module('myApp', ['ngRoute']);
      // Create a controller (attached to this module), and inject the customerFactory in it.
myAppModule.controller('homeController', function ($scope, $location, ingredientFactory, userFactory, $routeParams){
    $scope.leftovers = [{}];
    $scope.recipes = []
    $scope.ingredients = []
    $scope.user = $routeParams
    console.log($scope.user)

    $scope.favoritesPage = function() {
        // console.log('path')
        $location.path('/favorites/' + $scope.user.id)
    }

    $scope.goHome = function() {
        // console.log('path')
        $location.path('/home/' + $scope.user.id)
    }

    $scope.addfield = function () {
        $scope.leftovers.push({})
    }
    // $scope.getValue = function (item) {
    //     alert(item.name)
    // }

    $scope.sendIngredients = function() {
        // $scope.leftovers.key = '9fae6361e617907092f9d7ec278ed7e6';
        console.log($scope.leftovers);
        ingredientFactory.submitIngredients($scope.leftovers, function(data){
            // ingredientFactory.getRecipes(function (data) {
                $scope.recipes = data;
            // })
            $scope.leftovers = [{}];
        })
    }; 

    $scope.getIngredients = function(ingredientID) {
        $scope.ingredients = [];
        console.log(ingredientID);
        var obj = {recipeID: ingredientID}
        ingredientFactory.getIngredients(obj, function(data){
            $scope.ingredients = data
        })
    }   

    $scope.addFavorite = function(info) {
        if ($routeParams.id.length > 10) {
            console.log(info)
            info['userID'] = $routeParams
            userFactory.addFavorite(info, function(data) {
                console.log('it worked!', data)
            })
            alert('added to favorites')
        } else {
            alert('log in to add favorites')
        }
    }

    $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
            $('.modal-trigger').leanModal();
        });

        
});