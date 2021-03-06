angular.module('ReminderApp')
  .factory('EmailsFactory', function EmailsFactory($q, $http, $location) {
    'use strict';
    var exports = {};

    exports.messages = [];

    exports.getOutboxMessages = function() {
        var deferred = $q.defer();
        return $http.get('http://vensawebtest.azurewebsites.net/outbox')
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

    exports.getFailedMessages = function() {
        var deferred = $q.defer();
        return $http.get('http://vensawebtest.azurewebsites.net/outbox/Failed')
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
