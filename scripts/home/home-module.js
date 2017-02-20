(function () {

    'use strict';

    angular.module('app.home', [])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('home', {
            name: 'home',
            url: '/home',
            templateUrl: 'views/home/home.html',
            controller: 'HomeController as HomeCtrl'
        }).state('about', {
            name: 'about',
            url: '/about',
            templateUrl: 'views/home/about.html',
            controller: 'HomeController as HomeCtrl'
        });
    });
})();
