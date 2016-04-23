(function () {
    'use strict';
    var ctrlFunction = function (){
        this.hello = 'Emerg Global Ctrl';
        console.log('Emg Global');
    };
    angular.module('envio').controller('emergenciesGlobalCtrl', [ctrlFunction]);
})();