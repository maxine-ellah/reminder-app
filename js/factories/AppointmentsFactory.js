angular.module('ReminderApp')
  .factory('AppointmentsFactory', function AppointmentsFactory($q, $http, $location) {
    'use strict';
    var exports = {};

    exports.getMessages = function() {
      return $http.get('json/appointments.json')
      .error(function(data){
        console.log('Theres and error!')
      });
    };
    return exports;
  })
