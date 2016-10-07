(function () {

    'use strict';
    angular.module('app.constant', []).constant('LOCALES', {
        'locales': {
          'jp_JA': '日本',
          'en_US': 'English'
        },
        'preferredLocale': 'en_US'
    });
}());
