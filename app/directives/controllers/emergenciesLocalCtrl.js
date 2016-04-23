(function () {
    'use strict';
    var ctrlFunction = function (){
        this.hello = 'Emerg Local Ctrl';
        console.log('Emg Local');
    };
    angular.module('envio').controller('emergenciesLocalCtrl', [ctrlFunction]);
})();