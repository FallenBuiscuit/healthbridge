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


(function($) {
    
    MAPP = {
        init: function() {
            this.initialize();
            this.checkIfLoginOrLoggedOut();
        },

        initialize: function() {
            $('.redirect-btn').on("click", function(){
                var redirectUrl = $(this).val();
                window.open("/healthbridge" + redirectUrl, "_self");
            });
        },

        checkIfLoginOrLoggedOut: function() {
            var isLoggedIn = localStorage.getItem("isLoggedIn");
            if(isLoggedIn === 'true'){
                $('.logged-in').show();
                $('.logged-out').hide();
            } else {
                $('.logged-out').show();
                $('.logged-in').hide();
            }
        },

    };
    

    $(document).ready(function() {
        MAPP.init();
        var url = window.location.href;
        url = url.substring(url.indexOf('/hea'));
        if(url === '/healthbridge/guest'){
            localStorage.setItem("isLoggedIn", false);
        }
    });
})(jQuery);
