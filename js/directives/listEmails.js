app.directive('listEmails', function(){
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'js/directives/listEmails.html'
  };
});
