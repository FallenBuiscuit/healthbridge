var loginapp = angular.module("loginserviceapp", []);

loginapp.controller("loginServiceCtrl", function($scope,$http){
    $scope.email = null;
    $scope.password = null;

    $scope.logindata = function(username,password){
        $('.health-bridge-loading').show();  
        var request = {
            method: 'POST',
            url: 'https://8cz518ciu1.execute-api.us-east-1.amazonaws.com/dev/user/getlogindetails',
            headers: {
                "Content-type": "application/json"
            },
            data: {
                username: username,
                password: password
            }

        };

        $http(request).then(function(response){  
            if(response.status === 200 && response.data.length > 0){
                window.open("/healthbridge/patient", "_self");
            }
        });
    }
});