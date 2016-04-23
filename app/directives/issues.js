(function () {
    'use strict';
     angular.module('envio').directive('issues', function () {
         return {
           restrict: 'E',
           controller: 'issuesCtrl',
           controllerAs: 'issues',
           templateUrl: './templates/issues.html'
         };
     });
})();