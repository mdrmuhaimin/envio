(function () {
    'use strict';
     angular.module('envio').directive('emergenciesLocal', function () {
         return {
           restrict: 'E',
           controller: 'emergenciesLocalCtrl',
           controllerAs: 'emglcl',
           templateUrl: './templates/emergencies-local.html'
         };
     });
})();