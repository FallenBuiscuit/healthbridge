var landingapp = angular.module("landingserviceapp", []);

landingapp.controller("landingServiceCtrl", function($scope){

    $scope.landingPharmacy = function(){
         window.open("/healthbridge/pharmacy", "_self");

    }
});
