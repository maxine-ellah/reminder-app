app.directive('email', function(){
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'js/directives/emailDirective.html'
  };
});
