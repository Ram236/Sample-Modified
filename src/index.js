import angular from 'angular';

import { ngAnimate } from 'angular-animate';
import { ngSanitize } from 'angular-sanitize';

import 'angular-ui-bootstrap';
import 'angular-ui-router';
import 'angular-translate';

import routesConfig from './routes';
import translateConfig from './translateconfig';

import { hello } from './app/hello';
import { test01 } from './test01/app';
import { test02 } from './test02/app';

import jsonService from './test01/services/jsonService';
import EqualHeightsDirective from './test01/directives/equalHeight';

import './index.scss';

export const app = 'app';

angular
    .module(app, ['ngAnimate', 'ngSanitize', 'ui.router', 'ui.bootstrap', 'pascalprecht.translate'])
    .config(routesConfig)
    .config(translateConfig)
    .component('app', hello)
    .component('test01', test01)
    .component('test02', test02)
    .factory('JsonService', jsonService)
    .directive('equalHeights', EqualHeightsDirective)