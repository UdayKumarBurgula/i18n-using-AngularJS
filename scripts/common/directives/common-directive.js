(function () {

    'use strict';

    angular.module('app')

    /* language selector directive that can be used anywhere in the app */
    .directive('ngTranslateLanguageSelect', ngTranslateLanguageSelect);

    /**
    * @memberof module:app
    *
    * @requires Locales constant
    * @requires $translate
    */
    function ngTranslateLanguageSelect () {

        return {
            restrict: 'A',
            replace: true,
            template: ''+
                    '<div>'+
                      '<label>'+
                        '{{"directives.language-select.Language" | translate}}:'+
                        '<select ng-model="selected"'+
                        'ng-options="locale for locale in _LOCALES_DISPLAY_NAMES"'+
                        'ng-change="changeLanguage(selected)">'+
                        '</select>'+
                      '</label>'+
                    '</div>'+ '',
            controller: function ($scope, $translate, LOCALES) {
                var localesObj = LOCALES.locales;
                var _LOCALES = Object.keys(localesObj);

                $scope._LOCALES_DISPLAY_NAMES = [];

                _LOCALES.forEach(function (locale) {
                    $scope._LOCALES_DISPLAY_NAMES.push(locale);
                });

                $scope.selected = $scope._LOCALES_DISPLAY_NAMES[1];

                $scope.changeLanguage = function (localesObj) {
                    $translate.use(localesObj);
                };
            }
        };
    }
})();
