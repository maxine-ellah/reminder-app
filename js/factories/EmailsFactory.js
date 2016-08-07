angular.module('ReminderApp')
  .factory('EmailsFactory', function EmailsFactory($q, $http, $location) {
    'use strict';
    var exports = {};

    exports.messages = [];

    exports.getMessages = function() {
        var deferred = $q.defer();
        return $http.get('json/appointments.json')
          .success(function (data) {
            exports.messages = data;
            deferred.resolve(data);
          })
          .error(function (data) {
            deferred.reject(data);
            console.log("There was an error! ", data);
          });
        return deferred.promise;
      };

    return exports;
  });
