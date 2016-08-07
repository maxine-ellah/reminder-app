app.controller('EmailCtrl', function ($scope) {
      $scope.myEmail = false;
      $scope.myFailedEmail = false;
      
      $scope.showEmail = function (){
      $scope.myEmail = !$scope.myEmail;
    };

    $scope.showFailedEmail = function (){
    $scope.myFailedEmail = !$scope.myFailedEmail;
  };
});
