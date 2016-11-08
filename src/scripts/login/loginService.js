(function() {

    'use strict';

    angular
    .module('app.login')
    .service('loginService', loginService);

    function loginService($state, $q, $http) {

        var self = this;
        self.validateUser = validateUser;

        /**
         * validate the user
         *
         * @param {String} userName
         * @param {String} password
         *
         *
         * @returns {Promise} Returns a promise
         */
        function validateUser(userName, password)  {

            var options = {
                url: '/api/login',
                method: 'POST',
                data: {
                    user: userName,
                    pass: password
                },
                headers: {'content-type': 'application/json'}
            },
            deferred = $q.defer();

            $http(options)
            .success(function(status, headers, config, data) {
                deferred.resolve(data.data);
                $state.go('home');
            })
            .error(function(status, headers, config, data) {
                deferred.reject('unexpected error');
            });

            return deferred.promise;
        }
    }
}());
