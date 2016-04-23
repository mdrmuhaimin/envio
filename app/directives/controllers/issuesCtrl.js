(function () {
    'use strict';
    var ctrlFunction = function (){
        this.hello = 'Issue Ctrl';
        console.log('Issues');
    };
    angular.module('envio').controller('issuesCtrl', [ctrlFunction]);
})();