var landingapp = angular.module("landingserviceapp", []);
console.log("NISUUD1");
landingapp.controller("landingServiceCtrl", function($scope){

    $scope.landingPharmacy = function(){
         window.open("/healthbridge/pharmacy", "_self");

    }
});