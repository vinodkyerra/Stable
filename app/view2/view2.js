'use strict';

app.controller('View2Ctrl',['$scope','patientDetails','$location', function($scope,patientDetails, $location) {

  $scope.details =  patientDetails.getDetails();
  $scope.details.dob = new Date($scope.details.dob);
  // console.log("details", $scope.details);

  $scope.saveData= function(){
    
console.log($scope.details);
patientDetails.setDetails($scope.details);
$location.path('/view1');
  }
  $scope.cancelData= function(){
    
    $location.path('/view1');
      }
  $scope.deleteData= function(){
    
patientDetails.removeDetails($scope.details);
 $location.path('/view1');
 }    
}]);
