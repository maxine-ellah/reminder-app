app.controller('EmailCtrl', function ($scope) {
      $scope.myEmail = false;

      $scope.showEmail = function (){
      $scope.myEmail = !$scope.myEmail;
    };

});
