var mainapp = angular.module("mainapp", []);

mainapp.controller("mainServiceCtrl", function($scope, $http){

     $scope.getpatientappointment = function(){
     	var patientId = getCookie("patientId");
        var request = {
            method: 'POST',
            url: 'https://8cz518ciu1.execute-api.us-east-1.amazonaws.com/dev/patient/getpatientappointment',
            headers: {
                "Content-type": "application/json"
            },
            data: {
                patientId: patientId
            }
        };

        $http(request).then(function(response){
            if(response.status === 200 && response.data.length > 0){
                window.open("/healthbridge/patient/appointmentdetails", "_self");
            }
        });
    }
});

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

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
