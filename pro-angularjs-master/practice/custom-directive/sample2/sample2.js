 var mainApp = angular.module("mainApp", []);
 
 mainApp.directive('toDolist', function() {
    var directive = {};
    directive.restrict = 'E';
    directive.templateUrl = "test5.html";
//    directive.templateUrl = "demo.html";
    
  /*  directive.compile = function(element, attributes) {
       element.css("border", "2px solid #ff0000");
    }*/
    
    return directive;
 });
 
 mainApp.controller('mainAppController', function($scope,$http) {
	 console.log("Inside mainAppController");
	 
	 //Code related to demo.html for todo list goes here
		$http.get("http://localhost:3000/todo").success(function(data) {
			try {
				var jsonString = angular.toJson(data);
				console.log("JSON data from server :" + jsonString);
				console.table(data, [ 'action', 'done' ]);

				// Assigning JSON data to todos list
				$scope.todos = angular.fromJson(jsonString);

				// Setting the value manually. same script can be run on console to set value.
				// for any jsonpath watch http://goessner.net/articles/JsonPath/
				$scope.todos[0].action = "Buy Grains"
				console.table($scope.todos, [ 'action', 'done' ]);
			} catch (e) {
				console.table(todos, [ 'action', 'done' ]);
				console.log("Exception occuerd :" + e);
			}
		});
		
		
	  //Form functionality is goes here
	       
		//Function definition
	    $scope.reset = function(){
            $scope.firstName = "";
            $scope.lastName = "";
            $scope.email = ""; 
        }
          
	    $scope.submit = function(){
	      	console.log("# firstName:"+$scope.firstName+" | lastName:"+$scope.lastName+" | email:"+$scope.email)
	    }
	    
	   //For Call this functions are declared
	   $scope.reset();            
       $scope.submit();
 });
 
 
 
 
 
 
 
 