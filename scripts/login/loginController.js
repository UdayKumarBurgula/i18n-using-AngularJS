(function () {

    'use strict';

    angular
        .module('app.login', [])
        .controller('LoginController', LoginCtrl);

    LoginCtrl.$inject = ['$scope', '$state'];

    function LoginCtrl($scope, $state) {

        var self = this;

        self.validateUser = validateUser;

        function validateUser(userName, password) {

            if (($scope.userName === 'test') && ($scope.password === 'test')) {
                $scope.message = "validUser";
                $state.go('home');
            } else {
                $scope.message = "invalidUser";
            }
        }
    }
})();
