angular.module("app").controller("mainCtrl", function($scope) {
  $scope.friends = ["Garry", "Jerry", "Larry", "Perry", "Mary"];
  $scope.addFriend = function(value) {
    $scope.friends.push(value);
    $scope.newFriend = "";
  };
  $scope.newFriend = "";
});
