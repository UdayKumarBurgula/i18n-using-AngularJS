(function () {

    'use strict';

    angular
        .module('app.login', [])
        .controller('LoginController', LoginCtrl);

    LoginCtrl.$inject = ['$scope', '$state', 'LoginService'];

    // localStorageService need to inject if we use local storage
    function LoginCtrl($scope, $state, LoginService) {

        var self = this;

        self.validateUser = validateUser;

        function validateUser(userName, password) {

            // if (($scope.userName === localStorageService.get('userName')) && ($scope.password === localStorageService.get('password'))) {
            //     $scope.message = "validUser";
            //     $state.go('home');
            // } else {
            //     $scope.message = "invalidUser";
            // }

            LoginService.validateUser(userName, password);
        }
    }
})();
