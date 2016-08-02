angular.module('ReminderApp', [
  'ngRoute'
]).config(function($routeProvider) {
  'use strict';
  //configure URLs
  $routeProvider
  // appointments route
  .when('/appointments', {
    templateUrl: 'views/appointments.html',
    controller: 'AppointmentsCtrl',
  })
  .otherwise({
    redirectTo: '/appointments'
  });
});
