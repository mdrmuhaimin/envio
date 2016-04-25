(function () {
    'use strict';
     angular.module('envio').directive('map', function () {
         return {
           restrict: 'E',
           controller: 'mapCtrl',
           controllerAs: 'map',
           templateUrl: './templates/map.html'
         };
     });
})();