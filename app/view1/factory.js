
    app.factory('patientDetails', ['$http', function($http) {
        var details ='';
        var detailsData ='';
        return {
            getPatientInfo : function(){
                return $http.get("patients.json");
            },
            setDetails: function(data){
                console.log(data);
                details = data;
                return details;
            },
            getDetails: function(){
                return details;            },
            removeDetails: function(data){
                console.log(data);
                detailsData = data;
                return detailsData;
            },    
            deleteDetails: function(){
                return detailsData;            }    
            }
    }]); 
  