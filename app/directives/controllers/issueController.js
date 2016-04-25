(function () {
    'use strict';
    var ctrlFunction = function (){
        console.log('Hello World');
    };
    angular.module('envio').controller('issues', [ctrlFunction]);
})();