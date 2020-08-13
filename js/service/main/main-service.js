var mainapp = angular.module("mainapp", []);

mainapp.controller("mainServiceCtrl", function($scope, $http){
    $scope.redirect = function(redirectUrl){
        $('.health-bridge-loading').show();  
        window.open("/healthbridge" + redirectUrl, "_self");
    },

     $scope.getpatientappointment = function(){
        var request = {
            method: 'POST',
            url: 'https://8cz518ciu1.execute-api.us-east-1.amazonaws.com/dev/patient/getpatientappointment',
            headers: {
                "Content-type": "application/json"
            },
            data: {
                patientId: 3
            }
        };

        $http(request).then(function(response){
            if(response.status === 200 && response.data.length > 0){
                window.open("/healthbridge/patient/appointmentdetails", "_self");
            }
        });
    }
});