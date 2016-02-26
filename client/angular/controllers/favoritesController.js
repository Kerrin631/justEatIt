myAppModule.controller('favoritesController', function ($scope, $location, ingredientFactory, userFactory, $routeParams){
    $scope.favorites = []
    

     //get favorites
     // console.log($routeParams)
     var userID = $routeParams.id
     // console.log(userID)
     userFactory.getFavorites(userID, function (data) {
        $scope.favorites = data;
        // console.log($scope.favorites)
     })

});