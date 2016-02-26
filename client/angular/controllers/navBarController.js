myAppModule.controller('navBarController', function ($scope, $location, $routeParams, ingredientFactory, userFactory){
    $scope.favorites = []
    
    $scope.user = $routeParams
    console.log($routeParams)
    console.log($scope.user)

    $scope.favoritesPage = function() {
        $location.path('#/favorites/' + $scope.user)
    }
     
});