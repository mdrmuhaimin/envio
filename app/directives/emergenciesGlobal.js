(function () {
    'use strict';
     angular.module('envio').directive('emergenciesGlobal', function () {
         return {
           restrict: 'E',
           controller: 'emergenciesGlobalCtrl',
           controllerAs: 'emggbl',
           templateUrl: './templates/emergencies-global.html'
         };
     });
})();