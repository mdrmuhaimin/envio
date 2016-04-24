(function () {
    'use strict';
     angular.module('envio').directive('tags', function () {
         return {
           restrict: 'E',
           controller: 'tagsCtrl',
           controllerAs: 'tag',
           templateUrl: './templates/tags.html'
         };
     });
})();