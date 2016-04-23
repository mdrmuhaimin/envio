(function () {
    'use strict';
    var ctrlFunction = function (){
        this.hello = 'world';
        console.log('Hello World');
    };
    angular.module('envio').controller('issueController', [ctrlFunction]);
})();