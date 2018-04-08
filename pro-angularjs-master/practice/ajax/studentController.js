 var mainApp = angular.module("mainApp", []);
     
   //Controller Object Starts
 mainApp.controller('studentController', function($scope,$http) {
	 
//Student Object Starts
    $scope.student = {
       firstName: "Sai",
       lastName: "Nath",
       fees:500,
       quantity : 2,
       
       //JSON
      /*  subjects:[
          {name:'Physics',marks:70},
          {name:'Chemistry',marks:80},
          {name:'Math',marks:65}
       ], */
       
       //function asigned to variable
       fullName: function() {
          var studentObject;
          studentObject = $scope.student;
          return studentObject.firstName + " " + studentObject.lastName;
       }
    }
  //Student Object Ends
  
  //Default values are assigned
    $scope.enableDisableButton = true;
    $scope.showHide1 = false;
    $scope.showHide2 = true;
    $scope.clickCounter = 10;
    
    //AJAX Call goes here
    var url = "http://localhost:3000/subjects";
    
    $http.get(url).then( function(response) {
    	
    	try{
    		//Converting Json into String
    		console.log("toString():"+response.data.toString())
    		console.log("stringify:"+JSON.stringify(response.data)+"\n")
            var jsonString = angular.toJson(response.data);
                          
            console.log("JSON data from server url ["+url+"] is :"+jsonString);
            console.table(response.data,['name','marks']);

            //Converting String to JSON object and assign to Subject list                           
            $scope.student.subjects = angular.fromJson(jsonString);
            
            console.log("Json object :"+angular.fromJson(jsonString))
            
        }catch(e)
        {
        	console.table(response.data,['name','marks']);
        	console.log("Exception occuerd :"+e);
        }
    });
    
 })
 //Controller Object Ends
 
