(function() {
    'use strict';
    var ctrlFunction = function() {
        this.hello = 'tag Ctrl';
        console.log('Hello');
    };
    angular.module('envio').controller('tagsCtrl', [ctrlFunction]);
})();