(function(){
    var app = angular.module('okdevtv', []);
    var status = {
        url: 'http://www.okdevtv.com/'
    };
    
    app.controller('OkController', function() {
        this.gateway = status;
    });
})();

