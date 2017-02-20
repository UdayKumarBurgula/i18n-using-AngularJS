(function () {

    'use strict';

    angular.module('app.home')
    .controller('HomeController', HomeCtrl);

    HomeCtrl.$inject = ['$scope', '$state'];

    function HomeCtrl($scope, $state) {
        $scope.logout = function logout() {
            $state.go('login');
        };
    }
})();
