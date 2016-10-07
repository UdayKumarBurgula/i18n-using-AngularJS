(function () {

    'use strict';

    var home = angular.module('app.home');

    home.controller('homeController', homeCtrl);

    function homeCtrl($scope, $state, localStorageService) {
        $scope.logout = function logout() {
            $state.go('login');
        };
    }
}());
