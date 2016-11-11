(function () {

    'use strict';

    angular
        .module('app.login', [])
        .controller('loginController', loginCtrl);

    loginCtrl.$inject = ['$scope', '$state', 'loginService'];

    // localStorageService need to inject if we use local storage
    function loginCtrl($scope, $state, loginService) {

        var self = this;

        self.validateUser = validateUser;

        function validateUser(userName, password) {

            // if (($scope.userName === localStorageService.get('userName')) && ($scope.password === localStorageService.get('password'))) {
            //     $scope.message = "validUser";
            //     $state.go('home');
            // } else {
            //     $scope.message = "invalidUser";
            // }

            loginService.validateUser(userName, password);
        }
    }
}());
