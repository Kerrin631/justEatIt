//  build the controllers
    // Create a controller (attached to this module), and inject the customerFactory in it.
    // Create a module
      // var myAppModule = angular.module('myApp', ['ngRoute']);
      // Create a controller (attached to this module), and inject the customerFactory in it.
myAppModule.controller('userController', function ($scope, $location, ingredientFactory, userFactory){
    $scope.users = []
    

    $scope.register = function() {
        // console.log($scope.newUser);
        userFactory.addUser($scope.newUser, function(data){
            // console.log(data)
            message = data
            alert(message.message)
            $scope.users = [];
        })
    }; 

    $scope.logIn = function() {
        console.log($scope.login);
        userFactory.validateUser($scope.login, function(data) {
            console.log(data);
            message = data
            if (data.message === 'Email/Password combination do not match') {
                alert(data.message)
                $location.path('/login')
            } else {
                alert('You have successfully logged in!')
                $location.path('/home/' + data[0]._id)
            }
        })
    }   

//     $(document).ready(function(){
//     // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
//             $('.modal-trigger').leanModal();
//         });  
});