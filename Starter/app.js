var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', function($scope, $filter) {

  $scope.handle='';

  $scope.lowerCaseHandle = function() {
    return $filter('lowercase')($scope.handle);
  }

  // This helps show the digest cycle! We can manually add something to the watch list
  // $scope.$watch('handle', function(newValue, oldValue){
  //
  //   console.info('Changed!');
  //   console.log('Old: ' + oldValue);
  //   console.log('New: ' + newValue);
  //
  // })

  setTimeout(function(){
    $scope.$apply(function(){
      $scope.handle = 'newTwitterHandle';
    });
  }, 3000);

}]);
