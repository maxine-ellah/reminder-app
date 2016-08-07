var app = angular.module('ReminderApp', ['ngRoute']);

app.config(['$routeProvider',
  function($routeProvider) {
  //configure URLs
  $routeProvider
  // appointments route
  .when('/appointments', {
    templateUrl: 'views/appointments.html'
    // controller: 'AppointmentsCtrl',
  })
  .when('/outbox', {
    templateUrl: 'views/outbox.html'
    // controller: 'OutboxCtrl',
  })
  // .when('/message', {
  //   templateUrl: 'views/email.html'
  // })
  .when('/', {
    redirectTo: '/outbox'
  });
}]);
