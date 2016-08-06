app.controller('EmailCtrl', function ($scope) {
    $scope.showEmail = function (){
      $scope.myEmail = !$scope.myEmail;
    };
});
