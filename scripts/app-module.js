(function () {

    'use strict';

    /**
    * Currently manages all aspects of the application.This will be refactored into
    * multiple modules later on.
    *
    * @module app
    */
    angular.module('app', [

                    'ui.router',
                    'pascalprecht.translate',

                    /* Features */
                    'app.constant',
                    'app.login',
                    'app.home'
                  ])
     .config(config);

     /**
     * Default configuration for the application.
     *
     *
     * @memberof module:app
     *
     * @requires $translateProvider
     * @param constant Locale
     *
     * @ngInject
     */
     function config($translateProvider, $urlRouterProvider, $stateProvider, LOCALES) {

         // translation json file
         $translateProvider.useStaticFilesLoader({
             prefix: 'resources/locale-',
             suffix: '.json'
         });
         $translateProvider.preferredLanguage(LOCALES.preferredLocale);

         $stateProvider.state('login', {
             name: 'login',
             url: '/login',
             templateUrl: 'views/login/login.html',
             controller: 'LoginController as LoginCtrl'
         });

         $urlRouterProvider.otherwise("/login");
     }
})();
