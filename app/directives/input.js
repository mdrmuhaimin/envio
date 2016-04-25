(function () {
    'use strict';
     angular.module('envio').directive('userInput', function () {
         return {
           restrict: 'E',
           controller: 'inputCtrl',
           controllerAs: 'input',
           templateUrl: './templates/input.html'
         };
     });
})();