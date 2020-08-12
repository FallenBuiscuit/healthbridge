var path = require('path'),
    express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser');

var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
http.listen(8081, function(){
    console.log('listening on *:8081');
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/healthbridge/js', express.static(__dirname + '/js'));
app.use('/healthbridge/style', express.static(__dirname + '/style'));
app.use('/healthbridge/images', express.static(__dirname + '/images'));

app.get('/healthbridge/login', function (req, res) {
 res.sendfile(__dirname + '/web-content/login/login.html');

});
app.get('/healthbridge/patient', function (req, res) {
    res.sendfile(__dirname + '/web-content/landing/patient-landing-page.html');
});
app.get('/healthbridge/doctor', function (req, res) {
    res.sendfile(__dirname + '/web-content/landing/doctor-landing-page.html');
});
app.get('/healthbridge/doctor/appointments', function (req, res) {
    res.sendfile(__dirname + '/web-content/landing/doctor-landing-page-appointments.html');
});
app.get('/healthbridge/doctor/mypatients', function (req, res) {
    res.sendfile(__dirname + '/web-content/landing/doctor-landing-page-mypatients.html');
});
app.get('/healthbridge/doctor/profilesettings', function (req, res) {
    res.sendfile(__dirname + '/web-content/landing/doctor-landing-page-profilesettings.html');
});
app.get('/healthbridge/doctor/scheduling', function (req, res) {
    res.sendfile(__dirname + '/web-content/landing/doctor-landing-page-scheduling.html');
});
app.get('/healthbridge/patient/profile', function (req, res) {
    res.sendfile(__dirname + '/web-content/landing/patient-landing-profile-view.html');
});