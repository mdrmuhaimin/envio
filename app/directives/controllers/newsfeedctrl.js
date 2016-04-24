(function () {
    'use strict';
    var ctrlFunction = function (){
        this.isInputMode = false;
        this.hello = 'News Feed Ctrl';
        console.log('News Feed');
    };
    angular.module('envio').controller('newsfeedCtrl', [ctrlFunction]);
})();