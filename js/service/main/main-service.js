var mainapp = angular.module("mainapp", []);

mainapp.controller("mainServiceCtrl", function($scope){

    $scope.redirect = function(redirectUrl){
        $('.health-bridge-loading').show();  
        window.open("/healthbridge" + redirectUrl, "_self");
    }
});