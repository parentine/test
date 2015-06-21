'use strict';

/**
 * @ngdoc function
 * @name angularProjectApp.controller:MycontrollerCtrl
 * @description
 * # MycontrollerCtrl
 * Controller of the angularProjectApp
 */
angular.module('angularProjectApp')
  .controller('MycontrollerCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
