(function () {
    'use strict';
     angular.module('envio').directive('issues', function () {
         return {
           scope: { issues:"=" },  
           bindToController: true,
           restrict: 'E',
           controller: 'issuesCtrl',
           controllerAs: 'issues',
           templateUrl: './templates/issues.html'
         };
     });
})();