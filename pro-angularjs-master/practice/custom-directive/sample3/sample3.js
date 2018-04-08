 myapp = angular.module("myapp", []);
 myapp.directive('mytransclude', function() {
     var directive = {};

     directive.restrict = 'E'; /* restrict this directive to elements */
//     directive.transclude = true;
//     directive.template = "<div class='myTransclude' ng-transclude> This is a transcluded directive {{firstName}} </div>";
     directive.template = "<div> This is a transcluded directive {{firstName}} </div>";

     return directive;
 });
 myapp.controller("MyController", function($scope, $http) {
     $scope.firstName = "Sai";
 });