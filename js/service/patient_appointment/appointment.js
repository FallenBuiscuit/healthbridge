var appointmentapp = angular.module("appointmentserviceapp", []);

appointmentapp.controller("appointmentServiceCtrl", function($scope,$http){
    $scope.patientId = null;
    $scope.appointmentStatusId = null;

    $scope.appointmentdata = function(patientId,appointmentStatusId){
        var request = {
            method: 'POST',
            url: 'https://8cz518ciu1.execute-api.us-east-1.amazonaws.com/dev/patient/getpatientappointment',
            headers: {
                "Content-type": "application/json"
            },
            data: {
                patientId: 1,
                appointmentStatusId: null
            }
        };

        $http(request).then(function(response){  
            if(response.status === 200 && response.data.length > 0){
                window.open("/healthbridge/patient/appointmentdetails", "_self");
            }
        });
    }
});