var myAppModule = angular.module('justEatIt_App', ['ngRoute']);

//  use the config method to set up routing:
    myAppModule.config(function ($routeProvider, $locationProvider) {
      $routeProvider
        .when('/home',{
            templateUrl: 'partials/home.html'
        })
        .when('/login',{
            templateUrl: 'partials/signIn.html'
        })
        .when('/home/:id', {
          templateUrl: 'partials/home.html'
        })
        .when('/favorites/:id', {
          templateUrl: 'partials/favorites.html'
        })
        .otherwise({
          redirectTo: '/home'
        });
    });