'use strict';

// Declare app level module which depends on views, and core components
var app = angular.module('myApp', [
  'ngRoute'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
    $routeProvider
    .when("/view1", {
        templateUrl : "view1/view1.html",
        controller:'View1Ctrl'
    })
    .when("/view2", {
        templateUrl : "view2/view2.html",
        controller:"View2Ctrl"
    })

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
