var app = angular.module('ReminderApp', ['ngRoute']);

app.config(['$routeProvider',
  function($routeProvider) {
  //configure URLs
  $routeProvider
  // appointments route
  .when('/appointments', {
    templateUrl: 'views/emailList.html'
  })
  .when('/outbox', {
    templateUrl: 'views/emailList.html'
  })
  .when('/', {
    redirectTo: '/outbox'
  });
}]);
