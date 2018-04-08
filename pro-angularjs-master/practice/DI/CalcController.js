var mainApp = angular.module("mainApp", []);

mainApp.controller('CalcController',
		function($scope, CalcService, defaultInput) {
			//default value is assigned to number model
			$scope.number = defaultInput;
			
			//default value is assigned to result which will reflect on page load
			$scope.result = CalcService.square($scope.number);

			//Function called from html
			$scope.square = function() {
				$scope.result = CalcService.square($scope.number);
			}
		});

mainApp.value("defaultInput", 5);

mainApp.service('CalcService', function(MathService) {
	this.square = function(a) {
		return MathService.multiply(a, a);
	}
});

mainApp.factory('MathService', function() {
	var factory = {};

	factory.multiply = function(a, b) {
		return a * b;
	}
	return factory;
});

mainApp.config(function($provide) {
	$provide.provider('MathService', function() {
		this.$get = function() {
			var factory = {};

			factory.multiply = function(a, b) {
				return a * b;
			}
			return factory;
		};
	});
});



