import angular from 'angular';
import {
    ngAnimate
}
from 'angular-animate';
import 'angular-translate';
//import 'angular-translate-loader-static-files'; // and so on
import {
    ngSanitize
}
from 'angular-sanitize';
import 'angular-ui-bootstrap';

import 'angular-ui-router';
import routesConfig from './routes';
import translateConfig from './translateconfig';
import homeService from './controller';

import {
    hello
}
from './app/hello';
import {
    test01
}
from './test01/app';
import {
    test02
}
from './test02/app';

import './index.scss';

export const app = 'app';

angular
    .module(app, ['ngAnimate', 'ngSanitize', 'ui.router', 'ui.bootstrap', 'pascalprecht.translate'])
    .config(routesConfig)
    .config(translateConfig)
    .component('app', hello)
    .component('test01', test01)
    .component('test02', test02)
    .factory('HomeService', homeService);
var app1 = angular.module(app);
var HomeService = app1.factory('HomeService', function ($http) {
    var myService = {
        async: function () {
            // $http returns a promise, which has a then function, which also returns a promise
            var promise = $http.get('test01/data.json').then(function (response) {
                // The then function here is an opportunity to modify the response
                //console.log(response);
                // The return value gets picked up by the then in the controller.
                return response.data;
            });
            // Return the promise to the controller
            return promise;
        }
    };
    return myService;

});
var collapseWidget = app1.directive("collapseWidget", function factory() {

    return {
        template: '<button class="btn btn-lg btn-primary btn-block" ' +
            '{{buttons}}</button>',
        replace: true,
        restrict: 'E',
        scope: {
            title: "@",
            buttons: "="
        },
        link: function postLink(scope, element, attrs) {
            //            scope.$watch('__height', function (newHeight, oldHeight) {
            //                $('.btn').css('height', newHeight + 'px');
            //                //element.attr('style', 'height:' + newHeight + 'px');
            //                console.log('changed'); //element.attr('style', 'margin-top: ' + (58 + newHeight) + 'px');
            //            });
            //console.log("scope", scope);
        }
    };

});
