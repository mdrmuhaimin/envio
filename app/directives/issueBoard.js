(function () {
    'use strict';
     angular.module('envio').directive('issues', function () {
         return {
           restrict: 'E',
           controller: 'issueController',
           controllerAs: 'mv'  
         };
     });
})();