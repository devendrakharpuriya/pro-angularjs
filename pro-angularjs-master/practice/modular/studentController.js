 var mainApp = angular.module("mainApp", []);
     
   //Controller Object Starts
 mainApp.controller('studentController', function($scope) {
	 
//Student Object Starts
    $scope.student = {
       firstName: "Sai",
       lastName: "Nath",
       fees:500,
       quantity : 2,
       
       //JSON
       subjects:[
          {name:'Physics',marks:70},
          {name:'Chemistry',marks:80},
          {name:'Math',marks:65}
       ],
       
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
   
 })
 //Controller Object Ends
			     
