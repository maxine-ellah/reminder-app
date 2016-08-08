app.directive('messages', function(){
  return {
    restrict: 'E',
    replace: true,
    scope: true,
    templateUrl: 'js/directives/messages.html',
    controllerAs: 'emails',
    controller: function (EmailsFactory) {
      this.messages = [];

      EmailsFactory.getOutboxMessages()
        .then(angular.bind( this, function then(){
          this.messages = EmailsFactory.messages;
        }) );
    },
    link: function(scope, element, attrs, ctrl) {
    }
  };
});
