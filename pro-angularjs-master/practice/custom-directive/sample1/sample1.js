var mainApp = angular.module("mainApp", []);
 
 mainApp.directive('student', function() {
    var directive = {};
    directive.restrict = 'E';
    directive.template = "Student: <b>{{student.name}}</b> , Roll No: <b>{{student.rollno}}</b>";
    
    directive.scope = {
       student : "=firstname"
    }
    
    directive.compile = function(element, attributes) {
       element.css("border", "1px solid #cccccc");
       
       var linkFunction = function($scope, element, attributes) {
          element.html("Student: <b>"+$scope.student.name +"</b> , Roll No: <b>"+$scope.student.rollno+"</b><br/>");
          element.css("background-color", "#ff00ff");
       }
       return linkFunction;
    }
    
    return directive;
 });
 
 mainApp.controller('StudentController', function($scope) {
    $scope.Mahesh = {};
    $scope.Mahesh.name = "Sai nath";
    $scope.Mahesh.rollno  = 1;

    $scope.Piyush = {};
    $scope.Piyush.name = "Sai hari";
    $scope.Piyush.rollno  = 2;
 });