(function () {
    'use strict';
    var ctrlFunction = function (){
        this.hello = 'Map Ctrl';
        console.log('Map');
    };
    angular.module('envio').controller('mapCtrl', [ctrlFunction]);
})();