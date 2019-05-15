'use strict';



app.controller('View1Ctrl', ['$scope','patientDetails','$location', function($scope, patientDetails, $location) {
  console.log($scope);
  $scope.patientList = [];
  $scope.getPatientDetails = function(){
patientDetails.getPatientInfo().then(function(response){
      console.log(response.data);
      $scope.patientList = response.data;
      for (var i=0; i<$scope.patientList.patients.length; i++) {
        $scope.detailsData =  patientDetails.getDetails();
        $scope.deleteData =  patientDetails.deleteDetails();
        if($scope.detailsData != '' && $scope.detailsData.id == $scope.patientList.patients[i].id){
          $scope.patientList.patients[i] = $scope.detailsData;
          console.log($scope.detailsData);
        }
        if($scope.deleteData != '' && $scope.deleteData.id == $scope.patientList.patients[i].id){
          $scope.patientList.patients.splice(i, 1);
        }
      }
     
	  }, function(error){
		  
     });
    }
    $scope.getPatientDetails();
	  
  console.log($scope.patientList)

  
  $scope.getDetails = function(data){
console.log(data);
patientDetails.setDetails(data);
$location.path('/view2');
  } 

}]);