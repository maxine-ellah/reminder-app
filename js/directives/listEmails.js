app.directive('listEmails', function(){
  return {
    restrict: 'E',
    replace: true,
    scope: true,
    templateUrl: 'js/directives/listEmails.html',
    controllerAs: 'emails',
    controller: function (EmailsFactory) {
      this.messages = [];

      EmailsFactory.getMessages()
        .then(angular.bind( this, function then(){
          this.messages = EmailsFactory.messages;
        }) );
    },
    link: function(scope, element, attrs, ctrl) {
    }
  };
});
