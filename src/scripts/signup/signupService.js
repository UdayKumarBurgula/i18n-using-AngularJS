(function () {

    'use strict';

    angular.module('app.signup')
        .service('signupService', signupService);

    function signupService($state, $q, $http) {

        var self = this;

        self.addUser = addUser;

        /**
         * add the user
         *
         * @param {String} userName
         * @param {String} password
         *
         *
         * @returns {Promise} Returns a promise
         */
        function addUser(userName, password) {

            var options = {
                url: '/v1/addUser',
                method: 'POST',
                data: {
                    name: userName,
                    pass: password
                },
                headers: {'content-type': 'application/json'}
            },
            deferred = $q.defer();

            $http(options)
            .success(function(data, status, header, config) {
                deferred.resolve(data.data);
                $state.go('login');
            }).error(function(data, status, header, config) {
                deferred.reject('Error adding user');
            });
        }
    }
}());
