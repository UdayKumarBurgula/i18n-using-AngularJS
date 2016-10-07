(function () {

    'use strict';

    var home = angular.module('app.home', []);

    home.config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider.state('home', {
            name: 'home',
            url: '/home',
            templateUrl: 'views/home/home.html',
            controller: 'homeController'
        }).state('about', {
            name: 'about',
            url: '/about',
            templateUrl: 'views/home/about.html',
            controller: 'homeController'
        });
    });
}());
