(function () {

    'use strict';

    angular.module('app.signup', [])
    .controller('SignupController', SignupController);

    // app.config(function(localStorageServiceProvider) {
    //     localStorageServiceProvider
    //         .setPrefix('bilingualdemo')
    //         .setStorageType('localStorage');
    // });

    SignupController.$inject = ['SignupService'];

    // localStorageService- need to inject here if we use localStorage
    function SignupController(SignupService) {

        var self = this;
        self.saveUser = saveUser;

        function saveUser(userName, password) {

            // if (localStorageService.isSupported) {
            //     localStorageService.set('userName', $scope.userName);
            //     localStorageService.set('password', $scope.password);
            // }

            SignupService.addUser(userName, password);
        }
    }
})();
