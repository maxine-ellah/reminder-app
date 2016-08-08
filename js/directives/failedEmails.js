app.directive('failedEmails', function(){
  return {
    restrict: 'E',
    replace: true,
    scope: true,
    templateUrl: 'js/directives/templates/failedEmails.html',
    controllerAs: 'emails',
    controller: function (EmailsFactory) {
      this.messages = [];

      EmailsFactory.getFailedMessages()
        .then(angular.bind( this, function then(){
          this.messages = EmailsFactory.messages;
        }) );
    },
    link: function(scope, element, attrs, ctrl) {
    }
  };
});
