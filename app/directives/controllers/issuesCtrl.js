(function() {
    'use strict';
    var ctrlFunction = function() {
        this.hello = 'issue Ctrl';
    };
    angular.module('envio').controller('issuesCtrl', [ctrlFunction]);
})();