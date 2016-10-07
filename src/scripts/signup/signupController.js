(function () {

    'use strict';

    var app = angular.module('app.signup', []);

    // app.config(function(localStorageServiceProvider) {
    //     localStorageServiceProvider
    //         .setPrefix('bilingualdemo')
    //         .setStorageType('localStorage');
    // });

    app.controller('signupController', signupController);

    // localStorageService- need to inject here if we use localStorage
    function signupController(signupService) {

        var self = this;
        self.saveUser = saveUser;

        function saveUser(userName, password) {

            // if (localStorageService.isSupported) {
            //     localStorageService.set('userName', $scope.userName);
            //     localStorageService.set('password', $scope.password);
            // }

            signupService.addUser(userName, password);
        };
    }
}());
