var mainapp = angular.module("mainapp", []);
mainapp.controller("mainServiceCtrl", function($scope){

    $scope.redirect = function(redirectUrl){
        $('.health-bridge-loading').show();
        window.open("/healthbridge" + redirectUrl, "_self");
    }
});


(function($) {
    
    MAPP = {
        init: function() {
            this.initialize();
            this.checkIfLoginOrLoggedOut();
            this.checkPersonType();
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

        checkPersonType: function() {
            var personType = localStorage.getItem("personType");
            if(personType === '1'){
                $('#patientPharmacy').show();
                $('#doctorPharmacy').hide();
                $('#guestPharmacy').hide();
            } else if(personType === '2'){
                $('#patientPharmacy').hide();
                $('#doctorPharmacy').show();
                $('#guestPharmacy').hide();
            } else {
                $('#patientPharmacy').hide();
                $('#doctorPharmacy').hide();
                $('#guestPharmacy').show();
            }
            
        }

    };
    

    $(document).ready(function() {
        MAPP.init();
        var url = window.location.href;
        url = url.substring(url.indexOf('/hea'));
        if(url === '/healthbridge/guest'){
            localStorage.setItem("isLoggedIn", false);
            localStorage.setItem("personType", 0);
        }
        $('#errorLogin').hide();
        
    });
})(jQuery);
