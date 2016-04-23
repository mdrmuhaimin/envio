(function () {
    'use strict';
     angular.module('envio').directive('newsfeed', function () {
         return {
           restrict: 'E',
           controller: 'newsfeedCtrl',
           controllerAs: 'newsfeed',
           templateUrl: './templates/newsfeed.html'
         };
     });
})();